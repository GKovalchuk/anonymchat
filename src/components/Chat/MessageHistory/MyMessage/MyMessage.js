import cn from 'classnames';

function MyMessage(props) {
	const { content, color, userId } = props.message;
	return (
		<li className="message message-my__container">
			<div className="message__header">
				<span className="message__time">{'01:01'}</span> &nbsp; &nbsp;
				<span className="message__nick">{userId}</span>
				<i className={cn("message__circle", color)} />
			</div>
			<div className="message__content message-my">
				{content}
			</div>
		</li>
	);
}

export default MyMessage;
