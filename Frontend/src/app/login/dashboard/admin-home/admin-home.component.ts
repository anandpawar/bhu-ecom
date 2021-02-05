import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  userName: string = '';
  user;
  constructor() { }

  ngOnInit(): void {
    let user = localStorage.getItem('currentUser');
    this.user = JSON.parse(user);
    user = JSON.parse(user);
    if(user["firstName"]){
      this.userName = this.capitalize(user["firstName"]) + ' ' + this.capitalize(user["lastName"]);
    }
  }

  capitalize(str){
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
  }

}
