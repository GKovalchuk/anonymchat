import cn from 'classnames';

function AnonymMessage(props) {
	const { content, color, userId } = props.message;

	return (
		<li className='message message-anonym__container'>
			<div className="message__header">
				<span className="message__nick">
					<i className={cn("message__circle", color)} />
					{userId}
				</span>
				<span className="message__time">{'02.02'}</span>
			</div>
			<div className="message__content message-anonym">
				{content}
			</div>
		</li>
	);
}

export default AnonymMessage;
