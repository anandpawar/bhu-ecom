import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  contactDetail:any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserDetail(this.userService.uuid)
  }

  getUserDetail(id){
    this.userService.getUserDetail(id).subscribe( (res) => {
      if(res){
        this.contactDetail = res; 
      }
    })
  }

}
