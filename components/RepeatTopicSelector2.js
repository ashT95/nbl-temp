import "../sass/styles.scss"

class RepeatTopicSelector extends React.Component {
	render() {
		return(
			<ul className='topic-placements'>
			{ 
				this.props.topics.map((item,index)=>{
					let topic = this.props.topics[index];
					let artifact = topic.artifact[0]['loc'];
					let diameter = artifact.d;
					//console.log(diameter);
					let xperc = artifact.x / 1920;
					let yperc = artifact.y / 1080;

					//console.log(index, this.props.topics, topic.name, diameter);

					let type = 'none';
					if ( diameter <= 225 && diameter > 2 ) type = 'small';
					else if ( diameter > 225 && diameter <= 350 ) type = 'medium';
					else if ( diameter > 350 && diameter <= 425 ) type = 'large';
					else if ( diameter > 425 ) type = 'xl';

					//console.log(index, type, diameter);

					xperc *= 100;
					yperc *= 100;

					return (<li className={(index == this.props.topic_index ? 'selected' : '') + ' ' + type } onClick={(e) => this.props.selectTopic(index,e)} style={{left: xperc + '%', top: yperc + '%'}}>{/*this.props.topics[index].title*/}<span></span></li>)
				})
	        }
	        </ul>
		)
	}
}

export default RepeatTopicSelector;