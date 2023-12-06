import Link from 'next/link'

const Nav = props => (
	<div className='container fixed'>
		<div className='inner-container'>
			<div className='page-container'></div>
			<div id='Nav' className='nav-container'>
				<h1>
					Nokia
				</h1>
				<h1 className='thin'>
					Museum <span>CMS</span>
				</h1>
				<div className='divider'></div>
				<ul className='main'>
					
						<li className={props.hypebox_index == 1 ? 'selected' : ''}>
							Hypebox #1
							<span>editing</span>
						</li>
					
					
						<li className={props.hypebox_index == 2 ? 'selected' : ''}>
							Hypebox #2
							<span>editing</span>
						</li>
					
					
						<li className={props.hypebox_index == 3 ? 'selected' : ''}>
							Hypebox #3
							<span>editing</span>
						</li>
					
				</ul>

				<div className={'bottom ' + (props.content_modified ? 'show' : '') + ' ' + (props.content_saveReady ? 'save' : '') }>
					<div className='divider'></div>
					<div className='finalize'>
						<a href className='btn preview' onClick={()=>{props.Content.preview()}}>Preview</a>
						<a href className='btn save' onClick={()=>{props.Content.save()}}>Save</a>
					</div>
					<a href className='undo' onClick={()=>{props.Content.load(true)}}>revert to last saved version</a>
				</div>

			</div>
		</div>
	</div>
)

export default Nav