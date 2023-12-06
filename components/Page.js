import Link from 'next/link'

const Page = props => (
	<div className='container'>
		<div className='inner-container'>
			<div id='Page' className='page-container'>
				<bg>
					<content>
						{props.children}
					</content>
				</bg>
			</div>
		</div>
	</div>
)

export default Page