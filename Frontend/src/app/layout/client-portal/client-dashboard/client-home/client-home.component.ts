import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss']
})
export class ClientHomeComponent implements OnInit {

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
