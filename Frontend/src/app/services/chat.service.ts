import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';

const URL = 'ws://api.amservicesng.com/ws?userID=2b0a28b7-3263-4638-bee2-cd3469c89f1f&chatID=b64ea836-1e83-4190-b2a4-c274652380e1'
const CHAT_URL = 'ws://echo.websocket.org/';

export interface Message {
	chatId: any,
	senderId: any,
	action: any,
	text: any,
}

// export interface Message {
// 	author: string,
// 	message: string
// }

@Injectable({
	providedIn: 'root'
  })
export class ChatService {
	public messages: Subject<Message>;

	constructor(wsService: WebsocketService) {
		// this.messages = <Subject<Message>>wsService
		// 	.connect(URL)
		// 	.pipe(map((response: MessageEvent): Message => {
		// 		console.log("RESPONSE ", response)
		// 		let data = JSON.parse(response.data);
		// 		return {
		// 			// author: data.author,
		// 			// message: data.message
		// 			chatId: data.text,
		// 			senderId: data.text,
		// 			action: data.text,
		// 			text: data.text
		// 		}
		// 	}));
	}
}
