import './Chat.css';
import { useEffect, useState } from 'react';
import MessageHistory from './MessageHistory/MessageHistory';
import InputField from './inputField/InputField';
import { nanoid, customAlphabet } from 'nanoid';

function App() {
	const checkOldKey = () => {
		const restoreId = window.localStorage.getItem('yourId');
		if (!restoreId) return nanoid(16);
		else if (restoreId === "undefined") return nanoid(16);
		return restoreId;
	}
	const nanoidNumbers = customAlphabet('1234567890', 16);
	const dataUrl = new URL('http://127.0.0.1:7070/')
	const [chatData, setChatData] = useState([]);
	const [yourServerId, setYourServerId] = useState('none');
	const [yourId, setYourId] = useState(checkOldKey());
	const getData = async () => {
		const chatDataUrl = new URL('/', dataUrl)
		const response = (await fetch(chatDataUrl));
		if (response.ok) {
			let json = await response.json();
			setChatData(json);
		} else {
			console.log(`Ошибка  HTTP ${response.status}`)
		}
	};
	const getKey = async () => {
		const reqKeyUrl = new URL('/createNewKey', dataUrl);
		const response = (await fetch(reqKeyUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ "userId": yourId })
		}));
		if (response.ok) {
			let json = await response.json();
			console.log(json);
			setYourServerId(json[yourId]);
		} else {
			console.log(`Ошибка  HTTP ${response.status}`)
		}
	};

	useEffect(() => {
		const loadData = async () => {
			await getData();

		}
		loadData();
	}, []);

	useEffect(() => {
		console.log('set yourId:', yourId);
		window.localStorage.setItem('yourId', yourId);
		getKey();
	}, [yourId]);

	const sendMessage = async (message) => {
		const messageData = { "id": nanoidNumbers(), "userId": yourId, "content": message };
		const postMessageUrl = new URL('/', dataUrl)
		const response = await fetch(postMessageUrl, {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(messageData)
		});
		if (response.ok) {
			let newData = await response.json();
			console.log(newData);
			setChatData(newData);
		} else {
			console.log(`Ошибка  HTTP ${response.status}`);
		}
	}

	return (
		<div className="chat__container">
			<MessageHistory chatData={chatData} yourId={yourServerId} />
			<InputField sendMessage={sendMessage} />
		</div>
	);
}

export default App;