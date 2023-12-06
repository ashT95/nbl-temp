import "../sass/styles.scss"

class ContentItemSelector extends React.Component {
	render() {
		return(
			<ul>
			{ 
				this.props.topics.map((item,index)=>{
					let topic = this.props.topics[index];
					let artifact = topic.artifact[0]['loc'];
					let xperc = artifact.x / 1920;
					let yperc = artifact.y / 1080;

					xperc *= 100;
					yperc *= 100;

					return (<li className={index == this.props.topic_index ? 'selected' : '' } onClick={(e) => this.props.selectTopic(index,e)} style={{left: xperc + '%', top: yperc + '%'}}>{/*this.props.topics[index].title*/}</li>)
				})
	        }
	        </ul>
		)
	}
}

export default ContentItemSelector;