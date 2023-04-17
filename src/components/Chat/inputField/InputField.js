import { useState } from 'react';
import sendIcon from './horSend.png';

function InputField(props) {
	const { sendMessage } = props;
	const [text, setText] = useState('');
	const changeText = (e) => {
		setText(e.target.value);
	};
	const sendText = () => {
		sendMessage(text);
		setText('');
	};
	return (
		<div className="chat__input-conteiner">
			<label htmlFor="chatInput"></label>
			<input className="chat__input-field"
				type='text'
				onChange={changeText} value={text}
				onKeyDown={(e) => { if (e.code === "Enter") sendText() }}
				placeholder="Write a message.."
				id='chatInput'
				name='chatInput'
			/>
			<button type='button' onClick={sendText} className="chat__input-btn">
				<img src={sendIcon} alt="send" />
			</button>
		</div >

	);
}

export default InputField;