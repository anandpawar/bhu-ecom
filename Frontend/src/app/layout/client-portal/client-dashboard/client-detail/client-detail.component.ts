import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  contactDetail:any;

  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    let user = localStorage.getItem('currentUser');
    user = JSON.parse(user);
    if(user["id"]){  
      this.getUserDetail(user["id"])
    }
  }

  getUserDetail(id){
    this.userService.getUserProfile(id).subscribe( (res) => {
      if(res){
        this.contactDetail = res; 
      }
    })
  }

}
