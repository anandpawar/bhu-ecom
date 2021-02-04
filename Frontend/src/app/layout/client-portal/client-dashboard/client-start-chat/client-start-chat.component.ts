import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-client-start-chat',
  templateUrl: './client-start-chat.component.html',
  styleUrls: ['./client-start-chat.component.scss']
})
export class ClientStartChatComponent implements OnInit {

	public messages: Array<any>;
	public chatBox: string;
	public uid: any;
	public chatid: any;
	isStartClick = true;
	currentUserId;
	oldMessages;

    public constructor(private socket: WebsocketService, private userService: UserService) {
		
        this.messages = [];
		this.chatBox = "";
		let user = localStorage.getItem('currentUser');
		user = JSON.parse(user);
		if(user["id"]){  
			this.currentUserId = user["id"];
    	}
    }

    public ngOnInit() {
       let count = 1;
		this.socket.getEventListener().subscribe(event => {
		console.log(event)
		if(event.type == "message") {
			let data = event.data;
			if(count != 1) {
				this.messages.push(data);
			}
			count++;
		}
		if(event.type == "close") {
			let data = {
			type: "close",
			text: ""
			}
			this.messages.push(data);
		}
		if(event.type == "open") {
			let data = {
			type: "open",
			text: ""
			}
			this.messages.push(data);
		}
		});
    }

    public ngOnDestroy() {
        this.socket.close();
	}
	
	public startChat(){
		if(!this.uid && !this.chatid){
			this.getChatId();
		}
		this.userService.getOldChatMessages(this.chatid).subscribe( (res) => {
			if(res){
			  this.oldMessages = res.data; 
			}
		})
		this.socket.startConnection();
	}

    public sendMsg() {
		if(!this.uid && !this.chatid){
			this.getChatId();
		}
		
        if(this.chatBox) {
			this.socket.send(JSON.stringify({
				chatId: this.chatid,
				senderId: this.uid,
				action: "create",
				text: this.chatBox // Strip out html
			}));
			this.chatBox = "";
        }
	}
	
	public isSystemMessage(message: string) {
        return message;
	}
	
	public getChatId(){
		let user = localStorage.getItem('currentUser');
		user = JSON.parse(user);
		if(user["id"]){  
			this.uid = user["id"];
		}
		if(user["chatID"]){  
			this.chatid = user["chatID"];
		}
	}

	public addOldChat(){
		this.messages = this.oldMessages.concat(this.messages);
		this.oldMessages = null;
		setTimeout(()=>{
		  	var objDiv = document.getElementById("chatHistory");
			objDiv.scrollTop = objDiv.scrollHeight;
		},1000);
	}

	deleteMessage(id, index){
		this.userService.removeMessage(this.chatid, id).subscribe( (res) => {
		  if(res){
			this.messages.splice(index, 1);
		  }
		})
	}
}
