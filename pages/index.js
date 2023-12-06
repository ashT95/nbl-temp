import Layout from '../components/MyLayout.js'
import "../sass/styles.scss"

class Index extends React.Component {
	static async getInitialProps({ query, req }) {
		return {};
	}

	componentDidMount() {
		//console.log('Index mounted.');
		let $container = $('.container.fixed');
		$(window).scroll(function(evt){
			//window.scrollX
			$container[0].style.left = '-' + window.scrollX + 'px';
		})
	}

	render() {
		return(
			<Layout>
				<p className='example'>Nokia Bell Labs | Museum CMS</p>
				<img src='/static/img/nokia-logo.jpg' />
				<img src='/static/img/nokia-logo.jpg' />
				<img src='/static/img/nokia-logo.jpg' />
				<img src='/static/img/nokia-logo.jpg' />
				<img src='/static/img/nokia-logo.jpg' />
				<img src='/static/img/nokia-logo.jpg' />
				<img src='/static/img/nokia-logo.jpg' />
			</Layout>

		)
	}
}

export default Index;