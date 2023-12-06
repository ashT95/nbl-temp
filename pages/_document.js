import Document, {Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class CustomDocument extends Document {
	static getInitialProps({ renderPage }) {
		const { html, head, errorHtml, chunks } = renderPage();
		const styles = flush();
		
		return { html, head, errorHtml, chunks, styles };
	}

	render() {
		return (
			<html>
				<Head>
					
				</Head>
				<body>
					<Main />
					<NextScript />
					<script src="/static/libs/jquery-3.3.1.min.js"></script>
				</body>
			</html>
		);
	}
}