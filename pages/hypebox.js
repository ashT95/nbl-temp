import Layout from '../components/MyLayout.js'
import RepeatTopicSelector from '../components/RepeatTopicSelector2.js'
import "../sass/styles.scss"

import fetch from 'isomorphic-unfetch'


class Hypebox extends React.Component {
	constructor(){
		super();

		this.state = {
			hypebox_index: 1,
			topic_index: 0,
			contentItem_index: 0,
			pos_topicx: 0,
			pos_topicy: 0,
			pos_contentx: 0,
			pos_contenty: 0,
			content_modified: false,
			content_saveReady: false,
			history: [],
			currHistory: '',
			showHistory: false,
			screens: [{
				title: '',
				test: 'test',
				topics: [{
					artifact: [
						{
					    "_comment": "caption lines are unescaped HTML, so you can <br>",
					    "caption": "Theseus, Shannon's mechanical mouse<br>Original chess pieces from Belle",
					    "loc": {
					      "_comment": "units in pixels. top left is 0,0",
					      "x": 460,
					      "y": 800,
					      "d": 380
					    },
					    "show": true
					  }
					],
					contentsBox: {},
					deepDive: {
						columns: [{
							item: []
						}]
					},
					intro: '',
					slides: [],
					title: '',
					topicId: ''
				}]
			}]
		};
		
	}

	static async getInitialProps({ query, req }) {
		const res = await fetch('https://api.github.com/repos/zeit/next.js');
		const errorCode = res.statusCode > 200 ? res.statusCode : false;
		const json = await res.json();

		const ua = req ? req.headers['user-agent'] : navigator.userAgent;
		//console.log('query:', query);
		//console.log('json', json);
		//console.log(query);
		return {hypebox_index: parseInt(query.id), screens: [], ua };
	}

	componentDidMount() {
		const self = this;
		window.React = this;

		//


		console.log('Hypebox did mount.');
		console.log(this.props.id);

		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.selectTopic = this.selectTopic.bind(this);
		this.getArtifactDiameter = this.getArtifactDiameter.bind(this);
		this.getArtifactCaption = this.getArtifactCaption.bind(this);
		this.getContentItems = this.getContentItems.bind(this);
		this.getContentItem = this.getContentItem.bind(this);
		this.getCurrContentItem = this.getCurrContentItem.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.handleContentItemClick = this.handleContentItemClick.bind(this);
		this.getContentItemTextCaption = this.getContentItemTextCaption.bind(this);
		this.getContentImageSrc = this.getContentImageSrc.bind(this);
		this.getContentVideoSrc = this.getContentVideoSrc.bind(this);
		this.setTopicArtifactDiameter = this.setTopicArtifactDiameter.bind(this);

		//

		const Constants = {
			maxPosContentX: 1920 - 980,
			maxPosContentY: 1080 - 550,
			minPosTopic: 0,
			maxPosTopicX: 1920,
			maxPosTopicY: 1080
			/*minPosTopic: 225,
			maxPosTopicX: 1920 - (225*2),
			maxPosTopicY: 1080 - (225*2)*/
		}

		this.Constants = Constants;

		//

		let Content = {
			original: [],
			lastLoadedData: null,
			storedData: false,
			history: function(filename){
				console.log('load history:', filename);

				$.get('/history/' + filename, (res)=>{
					let results = {...res};
					if ( results.success === true && results.content ) results.content = JSON.parse(results.content);

					this.storedData = false;
					this.lastLoadedData = results.content.screens;
					this.reset();

					self.setState({currHistory: filename, content_modified: true});

					//if ( filename.indexOf('Saved') != -1 ) self.setState({content_saveReady: true});
				})
			},
			getHistory: function(showHistory, clicked){
				if ( self.state.showHistory === true && clicked === true ){
					self.setState({showHistory: false});
					return;
				}

				$.get('/history', function(res){
					self.setState({history: res.history});
					if ( showHistory === true ) self.setState({showHistory});

					if ( res.history.length > 0 ) self.setState({currHistory: res.history[0].file })
				})
			},
			loadFromHistory: function(){
				//console.log('loadFromHistory');

				$.get('/history', (res)=>{
					self.setState({history: res.history});

					if ( res.history.length > 0 && res.history[0].file.indexOf('Saved') == -1 ) {
						this.history(res.history[0].file);
					}
				})
			},
			read: function(cb){
				$.get('/api/read.content', function(res){
					let results = {...res};
					if ( results.success === true && results.content ) results.content = JSON.parse(results.content);
					cb(results);
				})
			},
			hasChanged: function(){
				return !(JSON.stringify(this.original) == JSON.stringify(self.state.screens));
			},
			load: function(removeTempHistory){
				if ( removeTempHistory ) {
					$.get('/remove-temp-history',res=>{
						this.getHistory();
					});
				}

				this.read((results)=>{
					if ( results.success === true ) {
						this.storedData = false;
						this.lastLoadedData = results.content.screens;
						this.reset();

						this.loadFromHistory();
					}
				})
			},
			resizeTextAreas: function(){
				TextArea.updateAll();

				$('textarea').each((index,target)=>{
  					self.handleKeyUp({target});
				});
			},
			output: function(){
				let o = {screens: {}};
				for ( var index in self.state.screens ){
					o.screens[ 'touchtable_' + (parseInt(index)+1) ] = self.state.screens[index];
				}
				return o;
			},
			saveJSON: function(type){
				
				$.post('/save/' + type, {data: JSON.stringify(this.output())}, (res)=>{
					console.log('res =>', res);
					console.log(typeof res.received );

					this.getHistory();
					//console.log()
				})

			},
			removeTempImages: function(){
				console.log('Content.removeTempImages()');

				$.get('/remote-temp-images', (res)=>{
					console.log('/remove-temp-images res=>', res);
				});
			},
			checkRemoveTempImages: function(subtract){
				if ( subtract === true ) this.saveImageTotal--;

				if ( this.saveImageTotal <= 0 ) this.removeTempImages();
			},
			saveImageTotal: 0,
			removeTempVideos: function(){
				console.log('Content.removeTempVideos()');

				$.get('/remote-temp-videos', (res)=>{
					console.log('/remove-temp-videos res=>', res);
				});
			},
			checkRemoveTempVideos: function(subtract){
				if ( subtract === true ) this.saveVideoTotal--;

				if ( this.saveVideoTotal <= 0 ) this.removeTempVideos();
			},
			saveVideoTotal: 0,
			save: function(){
				console.log('Content.save()');

				this.saveImageTotal = 0;
				this.saveVideoTotal = 0;
				for ( var screen of self.state.screens ){
					let topics = screen.topics;
					for ( var topic of topics ){
						let items = topic.deepDive.columns[0].item;
						for ( var item of items ){
							if (item.figure != undefined) {
								if ( item.figure && item.figure.src && item.figure.src.indexOf('tmp/') != -1 ){
							
									let filename = item.figure.src.split('tmp/')[1];
									item.figure.src = 'img/' + filename;
									
									console.log( item.figure.src );
	
									this.saveImageTotal++;
	
									$.ajax({
										type 		: "POST",
										url 		: '/transfer',
										data 		: JSON.stringify({filename: filename }),
										cache       : false,
										contentType : 'application/json',
										processData : false,
										success 	: (data)=>{
											//console.log(data);
											this.checkRemoveTempImages(true);
										},
										error 		: function() {
											//alert('error handling here');
										}
									});
		
							}
							} else {
								if ( item.video && item.video.src && item.video.src.indexOf('tmp/') != -1 ){
							
									let filename = item.video.src.split('tmp/')[1];
									item.video.src = 'img/' + filename;
									
									console.log( item.video.src );
	
									this.saveImageTotal++;
	
									$.ajax({
										type 		: "POST",
										url 		: '/transfer',
										data 		: JSON.stringify({filename: filename }),
										cache       : false,
										contentType : 'application/json',
										processData : false,
										success 	: (data)=>{
											//console.log(data);
											this.checkRemoveTempImages(true);
										},
										error 		: function() {
											//alert('error handling here');
										}
									});
							
								
								
							}
							}
						
						}

						let artifacts = topic.artifact;

						for ( var artifact of artifacts ){
							if ( artifact.loc.d <= 2 ) artifact.show = false;
							else artifact.show = true;
						}
					}
				}

				this.checkRemoveTempImages();
			

				self.setState({screens: self.state.screens});

				this.storedData = JSON.parse(JSON.stringify(self.state.screens));

				this.saveJSON( 'live' );
				this.saveJSON( 'temp-saved' );

				self.setState({content_modified: false, content_saveReady: false});
			},
			preview: function(){
				//console.log('Content.preview()');

				self.setState({content_saveReady: true});

				this.saveJSON( 'temp' );
			},
			reset: function(){
				//console.log('Content.reset()');

				/*if ( this.storedData ){
					this.original = JSON.parse(JSON.stringify(this.storedData));
					self.setState({screens:JSON.parse(JSON.stringify(this.storedData)), hypebox_index: 1, content_modified: false, content_saveReady: false});

					setTimeout(()=>{
						self.selectTopic(0);
					}, 25);
					return;
				}*/

				let screens = [];
				this.original = [];

				let keys = Object.keys(this.lastLoadedData);

				for ( var key of keys ){
					//console.log(key);
					screens.push({...this.lastLoadedData[key]})
					this.original.push({...this.lastLoadedData[key]});
				}

				this.original = JSON.parse(JSON.stringify(this.original));
				this.storedData = JSON.parse(JSON.stringify(this.original));
				self.setState({screens:JSON.parse(JSON.stringify(screens)), hypebox_index: 1, content_modified: false, content_saveReady: false});

				setTimeout(()=>{
					self.selectTopic(0);
				}, 25);
			}
		};

		Content.load();

		this.Content = Content;

		window.Content = Content;

		//

		let ContentSelector = {
			$el: $('#ContentSelector'),
			selectFile: function(){
				$('#file-input').trigger('click');
			},
			close: function(){
				//console.log('close...');
				this.$el.removeClass('visible');
			},
			open: function(){
				this.$el.addClass('visible');
			},
			addText: function(){
				//console.log('ContentSelector::addText');
				
				let obj = self.state.screens;
				let total = obj[self.state.hypebox_index-1].topics[self.state.topic_index]['deepDive']['columns'][0]['item'].length;

				obj[self.state.hypebox_index-1].topics[self.state.topic_index]['deepDive']['columns'][0]['item'].push({
					"text": ''
				});

				self.setState({screens: obj});

				self.handleContentItemClick(total);

				this.close();

				self.setState({content_modified: self.Content.hasChanged(), content_saveReady: false});
			},
			addImage: function(){
				//console.log('ContentSelector::addImage');

				let obj = self.state.screens;
				let total = obj[self.state.hypebox_index-1].topics[self.state.topic_index]['deepDive']['columns'][0]['item'].length;

				obj[self.state.hypebox_index-1].topics[self.state.topic_index]['deepDive']['columns'][0]['item'].push({
					"figure": {
						"src": '',
						"caption": ''
					}
				});

				self.setState({screens: obj});

				self.handleContentItemClick(total);

				this.close();

				self.setState({content_modified: self.Content.hasChanged(), content_saveReady: false});
			},
			addVideo: function(){
				//console.log('ContentSelector::addVideo');

				let obj = self.state.screens;
				let total = obj[self.state.hypebox_index-1].topics[self.state.topic_index]['deepDive']['columns'][0]['item'].length;

				obj[self.state.hypebox_index-1].topics[self.state.topic_index]['deepDive']['columns'][0]['item'].push({
					"video": {
						"src": '',
						"caption": ''
					}
				});

				self.setState({screens: obj});

				self.handleContentItemClick(total);

				this.close();

				self.setState({content_modified: self.Content.hasChanged(), content_saveReady: false});
			},
			removeContentItem: function(index){
				let obj = self.state.screens;

				obj[self.state.hypebox_index-1].topics[self.state.topic_index]['deepDive']['columns'][0]['item'].splice(index,1);

				self.setState({screens: obj});

				self.handleContentItemClick(0);

				self.setState({content_modified: self.Content.hasChanged(), content_saveReady: false});
			},
			previewImage: function(base64){
				//console.log('previewImage => UploadFileForm');

				//let obj = self.state.screens;
				//obj[self.state.hypebox_index-1].topics[self.state.topic_index]['deepDive']['columns'][0]['item'][self.state.contentItem_index].figure.src = base64;
				//self.setState({screens: obj});

				$('input[type="submit"]').click();
			},

			init: function(){

				$('#UploadFileForm').on('submit', function(evt){
					evt.preventDefault();

					let formData = new FormData($(this)[0]);

					$.ajax({
					    type 		: "POST",
					    url 		: $(this).attr('action'),
					    data 		: formData,
					    cache       : false,
        				contentType : false,
        				processData : false,
					    success 	: function(data) {
					        //console.log(data);

					        if ( data && data.filename ){
					        	let obj = self.state.screens;
								if (data.filename.split('.').pop() != 'mp4') {
									obj[self.state.hypebox_index-1].topics[self.state.topic_index]['deepDive']['columns'][0]['item'][self.state.contentItem_index].figure.src = 'tmp/' + data.filename;
								} else {
									obj[self.state.hypebox_index-1].topics[self.state.topic_index]['deepDive']['columns'][0]['item'][self.state.contentItem_index].video.src = 'tmp/' + data.filename;
								}

								self.setState({screens: obj});

								self.setState({content_modified: self.Content.hasChanged(), content_saveReady: false});
					        }

					    },
					    error 		: function() {
					        alert('error handling here');
					    }
					});
				});

				$('#file-input').on('change', (e)=>{
					let file = e.originalEvent.target.files[0];
					//console.log('files =>', e.originalEvent.target.files[0] );
					
					if ( e.originalEvent.target.files[0] === undefined ) return;

					var reader = new FileReader();

				    reader.onload = (e)=>{
				      //$('#blah').attr('src', e.target.result);
					 // console.log("CHANGE HERE :  " + file.src)
					
						this.previewImage(e.target.result);
					  
				    
				    }

				    reader.readAsDataURL(file);
				});
			}
		}

		ContentSelector.init();

		//this.closeContentSelector = ContentSelector.close.bind(this);
		this.ContentSelector = ContentSelector;


		//

		let $container = $('.container.fixed');
		let $content = $('.section.content');
		let $contentData = $('#ContentItemData');

		$(window).scroll(function(evt){
			$container[0].style.left = '-' + window.scrollX + 'px';
			let pos = $content.position();

			//console.log( pos.top, window.scrollY );

			if ( window.scrollY > pos.top + 80 ) $contentData.css({top: window.scrollY - pos.top - 70});
			else $contentData.css({top: 0});
		})

		

		/*$('textarea').each((index,target)=>{
  			this.handleKeyUp({target});
		});*/

		var $navItems = $('#Nav ul li' );
		$navItems.each((index,target)=>{
			$(target).click(((index)=>{
				return function(){
					self.setState({hypebox_index: index});
					self.selectTopic(0);
					//$(window).scrollTop(0);
					$('html, body').animate({ scrollTop: 0 }, 250);
				}
			})(index+1))
		})
		

		class SliderButton {
			constructor($el){
				this.$el = $el;
				this.startX = null;
				this.events = {};
				this.dragging = false;
				this.init();
			}

			setPerc(perc){
				this.$el.css({left: 'calc(' + (perc*100 + '%')  + ' - ' + (perc*50) + 'px)' });
			}

			on(eventName, cb){
				if ( eventName.indexOf(' ' ) !== -1 ){
					let arr = eventName.split(' ');
					for ( var value of arr ){
						this.on(value, cb);
					}
				} else {
					this.events[eventName] = cb;
				}
			}

			trigger(eventName, data){
				if ( this.events[eventName] ) this.events[eventName](data);
			}

			init(){
				this.$el.on('mousedown mousemove mouseup mouseout', (evt)=>{
					switch(evt.type){
						case 'mousedown':
							this.startX = evt.pageX;
							this.trigger('startdrag');
							this.dragging = true;
							break;
						case 'mousemove':
							if ( this.dragging ) this.trigger('dragging', evt.pageX - this.startX);
							break;
						case 'mouseup':
						//case 'mouseout':
							if ( this.dragging ) {
								this.trigger('enddrag', evt.pageX - this.startX);
								this.dragging = false;
							}
							break;
					}
				});
			}

			stop(){
				this.dragging = false;
			}
		}

		// ------------------------------------------------------------------------------------------------

		class TextArea {
			constructor(el){
				this.el = el;
				this.$el = $(el);
				this.id = $(el).attr('textarea-id');

				TextArea.instances.push(this);
			}

			update(){				
				let val = this.$el.attr('textarea-value');
				this.$el.val( val );
				self.handleKeyUp({target: this.el});
			}

		}

		TextArea.instances = [];
		TextArea.getInstanceById = function(id){
			for ( var instance of TextArea.instances ){
				if ( instance.id === id ) return instance;
			}
		}

		TextArea.updateAll = function(){
			//console.log('udpateAll...');
			for ( var instance of TextArea.instances ){
				//console.log('updating..')
				instance.update();
			}
		}

		$('textarea[textarea-value]').each((index,target)=>{
  			let ta = new TextArea(target);
		})

		this.TextArea = TextArea;


		// ------------------------------------------------------------------------------------------------

		class Slider {
			constructor(el, min, max){
				this.el = el;
				this.$el = $(el);
				this.$bar = null;
				this.$label = null;
				this.$btn = null;
				this.perc = 0.0;
				this.width = 0.0;
				this.btnState = '';
				this.button = null;
				this.min = min;
				this.max = max;
				this.range = max - min;
				this.val = null;
				this.events = {};
				this.id = this.$el.attr('slider-id') || '';
				this.init();
			}

			init(){
				//console.log('new Slider:', this.el, this.$el );
				this.$bar = this.$el.find('.bar');
				this.$label = this.$el.find('h4');
				this.$btn = this.$el.find('.btn');
				this.$hitarea = this.$el.find('.bar-hitarea');
				this.onResize();

				this.button = new SliderButton(this.$btn);

				this.button.on('startdrag', (x)=>{
					//console.log('startdrag', Math.random());
					this.button.startPerc = this.perc;
				})

				this.button.on('dragging dragend', (x)=>{
					//console.log('dragging', Math.random());
					var percX = x / this.width;
					this.setPerc(this.button.startPerc + percX);
				})

				this.$hitarea.click((evt)=>{
					var x = evt.pageX - this.$hitarea.offset().left;
					var percX = x / this.width;
					this.setPerc(percX);
				});

				this.$hitarea.on('mouseover mouseout', (evt)=>{
					this.button.stop();
				});

				Slider.instances.push(this);
				
			}

			on(eventName, cb){
				if ( eventName.indexOf(' ' ) !== -1 ){
					let arr = eventName.split(' ');
					for ( var value of arr ){
						this.on(value, cb);
					}
				} else {
					this.events[eventName] = cb;
				}
			}

			trigger(eventName, data){
				if ( this.events[eventName] ) this.events[eventName](data);
			}

			setPerc(perc, init){

				this.perc = perc;

				if ( this.perc < 0.0 ) this.perc = 0;
				else if ( this.perc > 1.0 ) this.perc = 1.0;


				this.val = Math.round(this.min + (this.perc * this.range));
				this.setLabel(this.val);
				this.button.setPerc(this.perc);

				this.trigger('update-perc', {perc: this.perc, init});
			}

			onResize(){
				this.width = this.$hitarea.width();
			}

			setLabel(val){
				//this.$label.html(val + 'px' );
			}

		}

		Slider.instances = [];
		Slider.getInstanceById = function(id){
			for ( var instance of Slider.instances ){
				if ( instance.id === id ) return instance;
			}
		}


		$('section.slider').each((index,target)=>{
  			let slider = new Slider(target, 0, 1000);
		})

		var sliderPosX = Slider.getInstanceById('topic-posx');
		var sliderPosY = Slider.getInstanceById('topic-posy');

		sliderPosX.on('update-perc', (evt)=>{
			this.setState({pos_topicx: Math.round(evt.perc*100)});

			let obj = this.state.screens;
			obj[this.state.hypebox_index-1].topics[this.state.topic_index].artifact[0]['loc'].x = this.Constants.minPosTopic + (evt.perc*this.Constants.maxPosTopicX);
			this.setState({screens: obj});

			if ( this.$selectedTopic ) this.$selectedTopic.css({left: (evt.perc*100)+'%'});

			if ( !evt.init ) this.setState({content_modified: this.Content.hasChanged(), content_saveReady: false});
		});

		sliderPosY.on('update-perc', (evt)=>{
			this.setState({pos_topicy: Math.round(evt.perc*100)});

			let obj = this.state.screens;
			obj[this.state.hypebox_index-1].topics[this.state.topic_index].artifact[0]['loc'].y = this.Constants.minPosTopic + (evt.perc*this.Constants.maxPosTopicY);
			this.setState({screens: obj});

			if ( this.$selectedTopic ) this.$selectedTopic.css({top: (evt.perc*100)+'%'});

			if ( !evt.init ) this.setState({content_modified: this.Content.hasChanged(), content_saveReady: false});
		});

		this.sliderPosX = sliderPosX;
		this.sliderPosY = sliderPosY;

		//

		var contentPosX = Slider.getInstanceById('content-posx');
		var contentPosY = Slider.getInstanceById('content-posy');


		var $contentBox = $('ul.content-placement li');

		contentPosX.on('update-perc', (evt)=>{
			this.setState({pos_contentx: Math.round(evt.perc*100)});

			let obj = this.state.screens;
			obj[this.state.hypebox_index-1].topics[this.state.topic_index]['contentsBox']['topLeftLoc']['x'] = evt.perc*this.Constants.maxPosContentX;
			this.setState({screens: obj});

			$contentBox.css({left: evt.perc*100+'%'})

			if ( !evt.init ) this.setState({content_modified: this.Content.hasChanged(), content_saveReady: false});
		});

		contentPosY.on('update-perc', (evt)=>{
			this.setState({pos_contenty: Math.round(evt.perc*100)});

			let obj = this.state.screens;
			obj[this.state.hypebox_index-1].topics[this.state.topic_index]['contentsBox']['topLeftLoc']['y'] = evt.perc*this.Constants.maxPosContentY;
			this.setState({screens: obj});

			$contentBox.css({top: evt.perc*100+'%'})

			if ( !evt.init ) this.setState({content_modified: this.Content.hasChanged(), content_saveReady: false});
		});

		this.contentPosX = contentPosX;
		this.contentPosY = contentPosY;

		let ResizeHandler = {
			to: false,
			update: function(){
				clearTimeout(this.to);
				this.to = setTimeout(()=>{
					this.trigger();
				},100);
			},
			trigger: function(){
				Content.resizeTextAreas();
			},
			init: function(){
				$( window ).on('resize', ()=>{
					this.update();
				})
			}
		}

		ResizeHandler.init();

		


		//

		class Toggle {
			constructor(el){
				this.el = el;
				this.$el = $(el);

				this.init();
			}

			init(){
				this.$buttons = this.$el.find('li');
				this.$buttons.each((index,val)=>{
					let $btn = $(val);
					$btn.click(()=>{
						this.$buttons.removeClass('selected');
						$btn.addClass('selected');
					})

				})
			}
		}


		$('section.toggle').each((index,target)=>{
  			let toggle = new Toggle(target);
		})

		//



	}

	handleContentItemClick(index){
		//console.log('handleContentItemClick', new Date().toISOString() );

		//let index = $(target).parent().attr('content-index');
		//if ( index ) this.setState({contentItem_index: index});
		//onClick={this.handleContentItemClick}
		this.setState({contentItem_index: index});

		setTimeout(()=>{
			this.TextArea.getInstanceById('content-item-text').update();
		}, 20);
		
	}

	handleKeyUp({target}) {
		//console.log(target)
		target.style.height = '1px';
  		target.style.height = (14+target.scrollHeight)+'px';
	}

	handleFocus({target}) {
		//console.log('focusing...');
		target.style.height = '1px';
		target.style.height = (14+target.scrollHeight)+'px';
	}

	handleBlur({target}) {


		//console.log('blurring...');
		target.style.height = '1px';
		target.style.height = (14+target.scrollHeight)+'px';


		let id = $(target).attr('textarea-id');
		let edited = false;
		var obj = this.state.screens;

		/*
			attract-caption-1
			attract-caption-2
		*/

		if ( id == 'main-title' ){
			let hypebox = obj[this.state.hypebox_index-1];
			hypebox.title = $(target).val();

			edited = true;
		}

		if ( id == 'topic-title' ){
			let topic = obj[this.state.hypebox_index-1].topics[this.state.topic_index];
			topic.title = $(target).val();

			edited = true;
		}

		if ( id == 'intro' ){
			let topic = obj[this.state.hypebox_index-1].topics[this.state.topic_index];
			topic.intro = $(target).val();

			edited = true;
		}

		if ( id == 'attract-caption-1' || id == 'attract-caption-2' ){
			let artifact = obj[this.state.hypebox_index-1].topics[this.state.topic_index]['artifact'][0];
			let cap1 = $( '[textarea-id="attract-caption-1"]').val();
			let cap2 = $( '[textarea-id="attract-caption-2"]').val();

			console.log(cap1, cap2);

			if ( cap2 != '' ) artifact.caption = cap1 + '<br>' + cap2;
			else artifact.caption = cap1;

			edited = true;
		}

		if ( id == 'content-item-text' ) {
			
			let item = obj[this.state.hypebox_index-1].topics[this.state.topic_index]['deepDive']['columns'][0]['item'][this.state.contentItem_index];
			
			if ( item.figure ) item.figure.caption = $(target).val()
			else if (item.video) item.video.caption = $(target).val()
			else item.text = $(target).val();

			edited = true;

		}

		if ( edited ) this.setState({screens: obj});

		//console.log('content changed?', this.Content.hasChanged());
		this.setState({content_modified: this.Content.hasChanged(), content_saveReady: false});
		
		

		//console.log('blur', $(target).attr('textarea-id') );
	}

	handleChange(evt, id){
		let o = {};
		o[id] = evt.nativeEvent.target.value;

		this.setState(o);
		//console.log(id, evt.nativeEvent);
	}

	getArtifactDiameter(){
		return this.state.screens[this.state.hypebox_index-1].topics[this.state.topic_index]['artifact'][0]['loc']['d'];
	}

	setTopicArtifactDiameter(diameter){
		let obj = this.state.screens;
		obj[this.state.hypebox_index-1].topics[this.state.topic_index]['artifact'][0]['loc']['d'] = diameter;
		//this.state.screens[this.state.hypebox_index-1].topics[this.state.topic_index]['artifact'][0]['loc']['d'] = diameter;
		this.setState({screens: obj});

		//this.TextArea.updateAll();
		setTimeout(()=>{
			this.Content.resizeTextAreas();
			this.setState({content_modified: this.Content.hasChanged(), content_saveReady: false});
		},1);
	}

	getArtifactCaption(lineIndex){
		let caption = this.state.screens[this.state.hypebox_index-1].topics[this.state.topic_index]['artifact'][0]['caption'] || '';
		let captionArr = caption.split('<br>');

		if ( lineIndex <= captionArr.length - 1 ) return captionArr[lineIndex];
		else return '';
	}

	getContentItems(){
		return this.state.screens[this.state.hypebox_index-1].topics[this.state.topic_index]['deepDive']['columns'][0]['item'] || [];
	}

	getCurrContentItem(){
		return this.getContentItems()[this.state.contentItem_index] || {text:'', figure:'', video:''};
	}

	getContentItem(index){
		return this.getContentItems()[index];
	}

	getContentImageSrc(index){
		return this.getContentItems()[index].figure.src;
	}

	getContentVideoSrc(index){
		return this.getContentItems()[index].video.src;
	}
	

	getContentItemTextCaption(index){
		let item = this.getContentItems()[index];

		if ( !item ) return '';

		if ( item.figure != undefined ) return item.figure.caption
		if (item.video != undefined) return item.video.caption

		return item.text;
	}

	getContentItemType(index){
		let type = 'text';
		
		if ( !this.getContentItems()[index] ) return '';

		if ( this.getContentItems()[index].figure != undefined ) type = 'image'
		if ( this.getContentItems()[index].video != undefined ) type = 'video'
		return type;
	}

	selectTopic = function(index, evt) {
		//console.log(index);
		//this.state.topic_index = index;

		let topic = this.state.screens[this.state.hypebox_index-1].topics[index];

		this.setState({contentItem_index: 0, topic_index: index});

		setTimeout(()=>{
			this.$selectedTopic = $('ul.topic-placements li.selected');
			let xperc = (topic['artifact'][0]['loc'].x-this.Constants.minPosTopic)/this.Constants.maxPosTopicX;
			let yperc = (topic['artifact'][0]['loc'].y-this.Constants.minPosTopic)/this.Constants.maxPosTopicY;

			//console.log('x:', topic['artifact'][0]['loc'].x, xperc);
			//console.log('y:', topic['artifact'][0]['loc'].y, yperc);
			this.sliderPosX.setPerc(xperc, true);
			this.sliderPosY.setPerc(yperc, true);
			this.contentPosX.setPerc(topic['contentsBox']['topLeftLoc']['x']/this.Constants.maxPosContentX, true);
			this.contentPosY.setPerc(topic['contentsBox']['topLeftLoc']['y']/this.Constants.maxPosContentY, true);

			Content.resizeTextAreas();
			this.TextArea.updateAll();
		}, 45);
		
		//console.log(this);
	}

	render() {
		return(
			<Layout hypebox_index={this.state.hypebox_index} content_saveReady={this.state.content_saveReady} content_modified={this.state.content_modified} Content={this.Content}>
				<section className='title'>
					<h3>Title</h3>
					<textarea onBlur={this.handleBlur} onKeyUp={this.handleKeyUp} textarea-value={this.state.screens[this.state.hypebox_index-1].title} textarea-id='main-title'></textarea>
				</section>

				<div className='topic'>


					<div className='topic-settings'>
						<div className='col left'>
							<div className='row top'>
								<h3>topics</h3>
							</div>
							<div className='row btm'>
								<div className='box'>
									<RepeatTopicSelector selectTopic={this.selectTopic} topic_index={this.state.topic_index} topics={this.state.screens[this.state.hypebox_index-1].topics} />
									
								</div>
							</div>
						</div>
						<div className='col right'>
							<div className='row top'></div>
							<div className='row btm'>
								<section className='slider' slider-id='topic-posx'>
									<h3>position <span>x</span></h3>
									<h4>{this.state.pos_topicx}%</h4>
									<div className='slider-container'>
										<div className='bar-hitarea'></div>
										<div className='bar'></div>
										<div className='btn'>
											<div className='inner'></div>
										</div>
									</div>
								</section>
								<section className='slider' slider-id='topic-posy'>
									<h3>position <span>y</span></h3>
									<h4>{this.state.pos_topicy}%</h4>
									<div className='slider-container'>
										<div className='bar-hitarea'></div>
										<div className='bar'></div>
										<div className='btn'>
											<div className='inner'></div>
										</div>
									</div>
								</section>
								<section className='toggle'>
									<h3>artifact / diameter</h3>
									<ul>
										<li className={this.getArtifactDiameter() < 2 ? 'selected' : ''} onClick={()=>{this.setTopicArtifactDiameter(1)}}>
											none<span></span>
										</li>
										<li className={this.getArtifactDiameter() > 2 && this.getArtifactDiameter() <= 225 ? 'selected' : ''} onClick={()=>{this.setTopicArtifactDiameter(225)}}>
											small<span></span>
										</li>
										<li className={this.getArtifactDiameter() > 225 && this.getArtifactDiameter() <= 350 ? 'selected' : ''} onClick={()=>{this.setTopicArtifactDiameter(350)}}>
											medium<span></span>
										</li>
										<li className={this.getArtifactDiameter() > 350 && this.getArtifactDiameter() <= 425 ? 'selected' : ''} onClick={()=>{this.setTopicArtifactDiameter(425)}}>
											large<span></span>
										</li>
										<li className={this.getArtifactDiameter() > 425 ? 'selected' : ''} onClick={()=>{this.setTopicArtifactDiameter(525)}}>
											XL<span></span>
										</li>
									</ul>
								</section>
							</div>
						</div>
					</div>


					<div className='divider'>
						<div className='triangle'></div>
					</div>


					<section className='subtitle'>
						<h3>Topic Title</h3>
						<textarea onBlur={this.handleBlur} textarea-id='topic-title' onKeyUp={this.handleKeyUp} textarea-value={this.state.screens[this.state.hypebox_index-1].topics[this.state.topic_index].title}></textarea>
					</section>


					<section className={this.getArtifactDiameter() < 10 ? 'hidden' : ''}>
						<h3>Artifact Caption</h3>
						<textarea onBlur={this.handleBlur} textarea-id='attract-caption-1' placeholder='Attract Caption - Line 1' onKeyUp={this.handleKeyUp} textarea-value={this.getArtifactCaption(0)}></textarea>
						<textarea onBlur={this.handleBlur} textarea-id='attract-caption-2' placeholder='Attract Caption - Line 2 ' onKeyUp={this.handleKeyUp} textarea-value={this.getArtifactCaption(1)}></textarea>
					</section>
					


					<section>
						<h3>Intro</h3>
						<textarea onBlur={this.handleBlur} textarea-id='intro' onKeyUp={this.handleKeyUp} textarea-value={this.state.screens[this.state.hypebox_index-1].topics[this.state.topic_index].intro}></textarea>
					</section>


					<div className='section content-box'>
						<div className='col left'>
							<div className='row top'>
								<h3 className='inactive'>content box</h3>
							</div>
							<div className='row btm'>
								<div className='box'>
									<ul className='content-placement'>
										<li style={{left: this.state.pos_contentx + '%', top: this.state.pos_contenty + '%'}}></li>
									</ul>
								</div>
							</div>
						</div>
						<div className='col right'>
							<div className='row top'></div>
							<div className='row btm'>
								<section className='slider' slider-id='content-posx'>
									<h3>position <span>x</span></h3>
									<h4>{this.state.pos_contentx}%</h4>
									<div className='slider-container'>
										<div className='bar-hitarea'></div>
										<div className='bar'></div>
										<div className='btn'>
											<div className='inner'></div>
										</div>
									</div>
								</section>
								<section className='slider' slider-id='content-posy'>
									<h3>position <span>y</span></h3>
									<h4>{this.state.pos_contenty}%</h4>
									<div className='slider-container'>
										<div className='bar-hitarea'></div>
										<div className='bar'></div>
										<div className='btn'>
											<div className='inner'></div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>


					<div className='section content'>
						<div className='col left'>
							<div className='row top'>
								<h3>content</h3>
							</div>
							<div className='row btm'>
								<div className='box'>
									{/*<ul>
										<li className='text selected'>
											<div className='icon'></div>
											<div className='remove'><span></span></div>
										</li>
										<li className='image'>
											<div className='icon'></div>
											<div className='remove'><span></span></div>
										</li>
										<li className='add'>
											<div className='icon'></div>
										</li>
									</ul>*/}
									<ul>
										{ 
											this.getContentItems().map((item,index)=>{
												let type = item.figure != undefined ? 'image' : item.video != undefined ? 'video' : 'text';
												return (<li className={type + ' ' + (index == this.state.contentItem_index ? 'selected': '')}>
													<div className={'icon ' + type} onClick={()=>{this.handleContentItemClick(index)}}></div>
													<div className='remove' onClick={()=>{this.ContentSelector.removeContentItem(index)}}><span></span></div>
												</li>);
											})
								        }
							        	<li className='add'>
											<div className='icon' onClick={()=>{this.ContentSelector.open()}}></div>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='col right'>
							<div className='row top'></div>
							<div className='row btm' id='ContentItemData'>
								<section>
									{(this.getContentItemType(this.state.contentItem_index) == 'image') &&
									<div className='img-container'> {<img src={this.getContentImageSrc(this.state.contentItem_index)} />}<span><div className='inner' onClick={()=>{this.ContentSelector.selectFile()}}>upload image</div></span></div>}
									{(this.getContentItemType(this.state.contentItem_index) == 'video') &&
									<div className='img-container'> {<video src={this.getContentVideoSrc(this.state.contentItem_index)} />}<span><div className='inner' onClick={()=>{this.ContentSelector.selectFile()}}>upload video</div></span></div>}
									<h3>{this.getContentItemType(this.state.contentItem_index) == 'text' ? 'text' : this.getContentItemType(this.state.contentItem_index) == 'image' ? 'image caption' : 'video caption'}</h3>
									<textarea placeholder='Please enter text or leave empty as a spacer.' textarea-id='content-item-text' onFocus={this.handleFocus} onBlur={this.handleBlur} onKeyUp={this.handleKeyUp} textarea-value={this.getContentItemTextCaption(this.state.contentItem_index)}></textarea>
								</section>
							</div>
						</div>
					</div>

				</div>

				<form id='UploadFileForm' action="/temp-upload" method="post" enctype="multipart/form-data" style={{display: 'none'}}>
					<input id="file-input" type="file" name="image" accept="image/jpeg, image/jpg, image/png, video/mp4" />
					<input type="submit" />
				</form>
				
			
				<div id='ContentSelector'>
					<div className='inner'>
						<h1>Add Content Type</h1>
						<div className='fullwidth'>
							<ul>
								<li onClick={()=>{this.ContentSelector.addText()}}>
									<div className='icon text'></div>
									<h2>TEXT</h2>
								</li>
								<li onClick={()=>{this.ContentSelector.addImage()}}>
									<div className='icon image'></div>
									<h2>IMAGE w/ CAPTION</h2>
								</li>
								<li onClick={()=>{this.ContentSelector.addVideo()}}>
									<div className='icon video'></div>
									<h2>VIDEO w/ CAPTION</h2>
								</li>
							</ul>
						</div>
					</div>
					<a href onClick={()=>{this.ContentSelector.close()}} className='close' />
				</div>

				<div className='history'>
					<div className='full-width'><a href className={'history-btn ' + (this.state.showHistory ? 'showing' : '')} onClick={()=>{this.Content.getHistory(true, true)}}>REVISION HISTORY <span>(Newest to Oldest)</span></a></div>
					<ul className={this.state.showHistory ? 'show' : ''}>
						{ 
							this.state.history.map((item,index)=>{
								return (<li><a className={this.state.currHistory == item.file ? 'selected' : ''} onClick={()=>{this.Content.history(item.file)}}>
									{item.name}</a>
								</li>);
							})
				        }
				        <li><a className={this.state.currHistory == 'original.json' ? 'selected' : ''} onClick={()=>{this.Content.history("original.json")}}>
									Pre-CMS Version (Original/Unedited)</a>
								</li>
					</ul>
				</div>

			</Layout>

		)
	}
}

export default Hypebox