function Typing(props) {
	const { from, time } = props.message;
	return (
		<li>
			<div className="message-data">
				<span className="message-data-name"><i className="fa fa-circle online" /> {from.name}</span>
				<span className="message-data-time">{time}</span>
			</div>
			<div className="typing-conteiner">
				<i className="fa fa-circle online typing1" />
				<i className="fa fa-circle online typing2" />
				<i className="fa fa-circle online typing3" />
			</div>
		</li>
	);
}

export default Typing;
