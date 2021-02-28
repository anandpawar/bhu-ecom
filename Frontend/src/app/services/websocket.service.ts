import { Injectable, EventEmitter } from '@angular/core';
import { UserService } from './user.service';

const URL = 'ws://chat-server.amservicesng.com/ws?userID=2b0a28b7-3263-4638-bee2-cd3469c89f1f&chatID=b64ea836-1e83-4190-b2a4-c274652380e1'
const CHAT_URL = 'ws://echo.websocket.org';

@Injectable()
export class WebsocketService {

    private socket: WebSocket;
    private listener: EventEmitter<any> = new EventEmitter();
	public uid: any;
	public chatid: any;
	public adminUserId: any;
	public adminChatId: any;

    public constructor(private userService: UserService) {
        let user = localStorage.getItem('currentUser');
		user = JSON.parse(user);
		if(user["id"]){  
			this.uid = user["id"];
		}
		if(user['chatID']){
			this.chatid = user['chatID'];
		}else{
			this.userService.getChatId(user["id"]).subscribe( (res) => {
				if(res){
					this.chatid = res['chatId']; 
					user['chatID'] = res['chatId'];
					localStorage.setItem('currentUser', JSON.stringify(user));
				}
			})
		}
	}
	
	public startConnection(){
		let ourUri = "wss://chat-server.amservicesng.com/ws?userID="+this.uid+"&chatID="+this.chatid;

		this.socket = new WebSocket(ourUri);
        this.socket.onopen = event => {
            this.listener.emit({"type": "open", "data": event});
        }
        this.socket.onclose = event => {
            this.listener.emit({"type": "close", "data": event});
        }
        this.socket.onmessage = event => {
            this.listener.emit({"type": "message", "data": JSON.parse(event.data)});
        }
	}

	public startAdminConnection(){
		let ourUri = "wss://chat-server.amservicesng.com/ws?userID="+this.adminUserId+"&chatID="+this.adminChatId;

		this.socket = new WebSocket(ourUri);
        this.socket.onopen = event => {
            this.listener.emit({"type": "open", "data": event});
        }
        this.socket.onclose = event => {
            this.listener.emit({"type": "close", "data": event});
        }
        this.socket.onmessage = event => {
            this.listener.emit({"type": "message", "data": JSON.parse(event.data)});
        }
	}

    public send(data: string) {
        console.log('data sent', data)
        this.socket.send(data);
    }

    public close() {
		if(this.socket){
			this.socket.close();
		}
    }

    public getEventListener() {
        return this.listener;
    }

}
