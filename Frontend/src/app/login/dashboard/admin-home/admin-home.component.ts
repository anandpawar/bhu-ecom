import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

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
