import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-sidebar',
  templateUrl: './client-sidebar.component.html',
  styleUrls: ['./client-sidebar.component.scss']
})
export class ClientSidebarComponent implements OnInit {

  userName: string = '';

  constructor() { }

  ngOnInit(): void {
    let user = localStorage.getItem('currentUser');
    user = JSON.parse(user);
    if(user["name"]){
      this.userName = user["name"];
    }
  }

}
