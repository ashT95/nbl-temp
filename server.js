const express = require('express') 
const next = require('next')
const request = require('request');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev }) 
const handle = app.getRequestHandler() 

const fs = require('fs');
const path = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');
const moment = require('moment');
const spawn = require('child_process').spawn;
const exec = require('child_process').exec;

var storage = multer.diskStorage(
    {
        destination: __dirname + '/../nokia_bell_labs_deploy/shared/assets/img/',
        filename: function ( req, file, cb ) {
            cb( null, file.originalname );
        }
    }
);

var tempStorage = multer.diskStorage(
    {
        destination: __dirname + '/static/tmp/',
        filename: function ( req, file, cb ) {
            cb( null, file.originalname );
        }
    }
);

const tempUpload = multer({storage: tempStorage});
const upload = multer({storage: storage});

const socketIO_client = require('socket.io-client');

const IP_CONFIG = {
	overhang: 'http://192.168.1.122:3000',
	touchtable_1: 'http://192.168.1.126:3001',
	touchtable_2: 'http://192.168.1.106:3001',
	touchtable_3: 'http://192.168.1.141:3001',
	tester: 'http://192.168.1.157:3001'
}

const IO_CLIENT = {
	overhang: false,
	touchtable_1: false,
	touchtable_2: false,
	touchtable_3: false,
	tester: false
}

app
	.prepare() 
	.then(() => { 
		const server = express() 

		server.use( express.static(__dirname + '/../nokia_bell_labs_deploy/shared/assets') );
		server.use( express.static(__dirname + '/static') );
		server.use( bodyParser.urlencoded({ extended: false }) );
		server.use( bodyParser.json() );

		//console.log(__dirname );

		//////////////////////////////////////////////////////////////////

		var filename = '../nokia_bell_labs_deploy/shared/config/content.json';

		server.get('/api/read.content', (req,res)=>{

			fs.readFile(filename, 'utf8', function(err, data) {
			  if ( err ) {
			  	//console.error(err.message);

			  	res.json({
			  		success: false,
			  		error: err.message
			  	})

			  	return;
			  }
			  
			  res.json({
			  	success: true,
			  	content: JSON.stringify(JSON.parse(data))
			  })

			});

		});

		server.get('/remote-temp-images', (req,res)=>{
			const dir = __dirname + '/static/tmp';

			fs.readdir(dir, (err, files) => {
			  if (err) throw err;

			  for (const file of files) {

			  	if ( file != '.gitkeep' ){
			  		fs.unlink(path.join(dir, file), err => {
				      if (err) throw err;
				    });
			  	}
			    
			  }
			});

			res.json({success: true})
		});

		let removeTempHistory = function(){
			const dir = __dirname + '/static/data/history';

			fs.readdir(dir, (err, files) => {
			  if (err) throw err;

			  for (const file of files) {

			  	if ( file != '.gitkeep' && file != 'original.json' && file.indexOf('Saved') == -1 ){
			  		fs.unlink(path.join(dir, file), err => {
				      //if (err) throw err;
				    });
			  	}
			    
			  }
			});
		}

		server.get('/remove-temp-history', (req,res)=>{
			removeTempHistory();

			res.json({success: true})
		});

		server.post('/upload', upload.single('image'), (req, res) => {
			//console.log('/upload', new Date());
			//console.log(req.file);
		    if(req.file) {
		    	//console.log('success!');
		        res.json(req.file);
		    } else {
		    	//console.log('fail');
		    	res.json({success: false})
		    }
		});

		server.post('/transfer', (req, res) => {
			//res.json(req.body);

				fs.rename( __dirname + '/static/tmp/' + req.body.filename, __dirname + '/../nokia_bell_labs_deploy/shared/assets/img/' + req.body.filename, (err) => {
					if (!err) {
						res.json({success: true, request: req.body })
					} else {
						res.json({success: false})
					}
			  }) 
			

		});

		server.post('/temp-upload', tempUpload.single('image'), (req, res) => {
			//console.log('/upload', new Date());
			//console.log(req.file);
		    if(req.file) {
		    	//console.log('success!');
		        res.json(req.file);
		    } else {
		    	//console.log('fail');
		    	res.json({success: false})
		    }
		});


		server.get('/history', (req,res)=>{
			const dir = __dirname + '/static/data/history';

			fs.readdir(dir, (err, files) => {
			  if (err) {
			  	res.json({history:[]});
			  	return;
			  }

			  let history = [];

			 /*history.push({
			  	file: 'original.json',
			  	name: 'Pre-CMS Version (Original / Unedited)'
			  })*/

			  let count = 0;
			  for (const file of files) {

			  	if ( count < 100 && file.indexOf('.json') != -1 && file != 'original.json' ){
			  		history.push({
			  			file: file,
			  			name: file.split("---").join(", ").split("___").join(" ").split("-").join(" ").split("_").join(":").split(".json")[0]
			  		});
			  		count++;
			  	}
			  }

			  

			  history = history.reverse();

			  res.json({history});

			});
		});

		server.get('/history/:filename', (req,res)=>{
			let dir = __dirname + '/static/data/history/';

			fs.readFile(dir + req.params.filename, 'utf8', function(err, data) {
			  if ( err ) {
			  	//console.error(err.message);

			  	res.json({
			  		success: false,
			  		error: err.message
			  	})

			  	return;
			  }
			  
			  res.json({
			  	success: true,
			  	content: JSON.stringify(JSON.parse(data))
			  })

			});
		});


		server.post('/save/:type', (req,res)=>{
			//console.log(req);
			

			if ( req.params.type == 'live' ){
				let data = JSON.stringify(JSON.parse(req.body.data), null, 2 );

				let dir = __dirname + '/../nokia_bell_labs_deploy/shared/config/';

				const filepath = dir + 'content.json';

				fs.writeFile(filepath, data, (err) => {  
				    //if (!err) console.log('/save/live =>', filepath );
				});

			} else {
				let data = JSON.stringify(JSON.parse(req.body.data), null, 2 );

				let dir = __dirname + '/static/data/history/';

				let date = moment().format("MMM Do YYYY").split(' ').join('-') + '---';
				let time = moment().format('LTS').split(':').join('_').split(' ').join('___');

				let filepath = dir + date + time + '.json';
				if ( req.params.type == 'temp-saved' ) filepath = dir + date + time + ' (Saved).json';
				fs.writeFile(filepath, data, (err) => {  
				    //if (!err) console.log('/save/temp =>', filepath );
				});

				if ( req.params.type == 'temp-saved' ) {
					removeTempHistory();

					/*let touchtable_id = 'touchtable_3'; // CENTER HYPEBOX

					request.post(IP_CONFIG[touchtable_id]+'/save-content', {form: {content: JSON.stringify(JSON.parse(req.body.data), null, 2 ) }}, (err, res, body)=>{
						//console.log(body);
					})*/

					request.post(IP_CONFIG['overhang']+'/preview-content', {form: {content: JSON.stringify(JSON.parse(req.body.data), null, 2 ) }}, (err, res, body)=>{
						//console.log(body);
					})

					for ( var i = 1, len = 3+1; i < len; i++ ){
						let touchtable_id = 'touchtable_'+i;

						if ( i === 3 ){
							request.post(IP_CONFIG[touchtable_id]+'/save-content', {form: {content: JSON.stringify(JSON.parse(req.body.data), null, 2 ) }}, (err, res, body)=>{
								//console.log(body);
							})

							setTimeout(()=>{
								exec('rm .git/hooks/pre-push', {cwd: __dirname }, function(err,stdout,stderr){
								     console.log('removed file');
								  });

								exec('git add -A && git commit -m "client SAVED content.json" && git push', {cwd: __dirname }, function(err,stdout,stderr){
								    console.log('done');
								});
							}, 6000 );

							
						} else {
							request.post(IP_CONFIG[touchtable_id]+'/preview-content', {form: {content: JSON.stringify(JSON.parse(req.body.data), null, 2 ) }}, (err, res, body)=>{
								//console.log(body);
							})
						}
					}

					

					//spawn('cd', [__dirname, '&&', 'git', 'add', '-A','&&', 'git','commit', '-m', 'content updated','&&','git','push']);
					

				} else {
					request.post(IP_CONFIG['overhang']+'/preview-content', {form: {content: JSON.stringify(JSON.parse(req.body.data), null, 2 ) }}, (err, res, body)=>{
						//console.log(body);
					})

					for ( var i = 1, len = 3+1; i < len; i++ ){
						let touchtable_id = 'touchtable_'+i;
						request.post(IP_CONFIG[touchtable_id]+'/preview-content', {form: {content: JSON.stringify(JSON.parse(req.body.data), null, 2 ) }}, (function(index){return (err, res, body)=>{
							console.log(index, body);
						}})(i));
					}
					
				}



				
			}


			res.json({received: JSON.parse(req.body.data) || 'blank', type: req.params.type});
		});


		//////////////////////////////////////////////////////////////////

		/*server.get('/hypebox/:id', (req, res) => { 
			app.render(req, res, '/hypebox', req.params )
		})*/

		server.get('/', (req, res) => { 
			app.render(req, res, '/hypebox' )
		}) 

		server.get('*', (req, res) => { 
			return handle(req, res) 
		}) 

		server.listen(8080, (err) => { 
			if (err) throw err 
			console.log('> Ready on http://localhost:8080') 
		})


		//////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////
		// Connect to Hypeboxes and Overhang Screen
		
		IO_CLIENT.overhang = socketIO_client.connect( IP_CONFIG.overhang+'/overhang' );

		IO_CLIENT.overhang.on('connect', function () {
			console.log('[Socket.io Client] connected to overhang');
			//hangover_client.emit('room', {t_name:CONFIG.name, room:'touchtable_room'});
		});

		//

		for ( var i = 1, len = 3+1; i < len; i++ ){
			let touchtable_id = 'touchtable_'+i;

			IO_CLIENT[touchtable_id] = socketIO_client.connect( IP_CONFIG[touchtable_id]+'/touch' );

			IO_CLIENT[touchtable_id].on('connect', (function(index){ return ()=>{
				console.log('[Socket.io Client] connected to touchtable_'+index);
				IO_CLIENT[touchtable_id].emit('b_msg', {
					cmd: 'hello from CMS'
				})
			}; })(i) );
		}

		//

		var TESTING = true;

		if ( TESTING ){
			console.log('Connecting to tester... REMOVE for live');
			IO_CLIENT.tester = socketIO_client.connect( IP_CONFIG.tester+'/touch' );

			IO_CLIENT.tester.on('connect', function () {
				console.log('[Socket.io Client] connected to tester');
				IO_CLIENT.tester.emit('b_msg', {
					cmd: 'hello from CMS'
				})
			});

		}

		



	}) 
	.catch((ex) => { 
		console.error(ex.stack) 
		process.exit(1) 
	})