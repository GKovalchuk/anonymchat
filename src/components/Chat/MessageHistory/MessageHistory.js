import Message from './MyMessage/MyMessage.js';
import AnonymMessage from './anonymMessage/anonymMessage.js';

function MessageHistory(props) {
	const { chatData, yourId } = props;

	const renderMessages = () => chatData.map(({ id, userId, content }) => {
		if (userId === yourId) return <Message key={id} message={{ userId, content }} />;
		return <AnonymMessage key={id} message={{ userId, content }} />;
	});

	return (
		<ul className='messages-field'>
			{renderMessages()}
		</ul>
	);
}

export default MessageHistory;
