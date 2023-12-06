import Nav from './Nav'
import Page from './Page'

const layoutStyle = {

}

const Layout = props => (
	<main>
		<Nav Content={props.Content} hypebox_index={props.hypebox_index} content_modified={props.content_modified} content_saveReady={props.content_saveReady} />
		<Page>
			{props.children}
		</Page>
	</main>
)

export default Layout