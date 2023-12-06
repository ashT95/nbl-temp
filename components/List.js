const List = props => (
	<div>
        { props.data.map(function(item) {
                return <div>{item}</div>
            })
        }
    </div>
)

export default List