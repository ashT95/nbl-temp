import Layout from '../components/MyLayout.js'
import "../sass/styles.scss"

class About extends React.Component {
	static async getInitialProps({ query, req }) {
		return {};
	}

	componentDidMount() {
		//console.log('About mounted.');
	}

	render() {
		return(
			<Layout>
				<p className='example'>About page</p>
			</Layout>
		)
	}
}

export default About;