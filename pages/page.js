import fetch from 'isomorphic-unfetch';

class Page extends React.Component {
	static async getInitialProps({ query, req }) {
		const res = await fetch('https://api.github.com/repos/zeit/next.js');
		const errorCode = res.statusCode > 200 ? res.statusCode : false;
		const json = await res.json();

		const ua = req ? req.headers['user-agent'] : navigator.userAgent;
		//console.log('query:', query);
		//console.log('json', json);
		return {id: query.id, stars: json.stargazers_count, ua };
	}

	componentDidMount() {
		console.log('GrandChild did mount.');
	}

	render() {
		return(
			<div>
				<h1>Page: {this.props.id}</h1>
				<div>{this.props.ua}</div>
			</div>
		)
	}
}

export default Page;