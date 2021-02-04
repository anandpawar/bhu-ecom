import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {

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
