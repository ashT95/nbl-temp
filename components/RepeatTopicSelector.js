const RepeatTopicSelector = props => (
	<div>
        {props.screens[props.hypebox_index].topics[props.topic_index].title}
        return({ props.topics.map(function(item) {
                return <div>{item}</div>
            })
        })
    </div>
)

export default RepeatTopicSelector