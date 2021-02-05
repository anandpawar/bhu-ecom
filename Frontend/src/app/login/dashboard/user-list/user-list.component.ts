import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  p: number = 1;
  userList: any;
  totalSize: number;
  type: string = 'general';

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.getUserList();
  }

  onTypeChange(e){  
    this.type = e.target.options[e.target.options.selectedIndex].value;
    this.p = 1;
    this.getUserList();
  }

  getUserList(){
    this.userService.getUsers(this.p).subscribe( (res) => {
      if(res['data']){
        this.userList = res['data']['users']['rows']; 
        this.totalSize = res['data']['users']['count'];

        this.userList = this.userList.filter( (user) => user.isAdmin == false );
      }
    },
    error => {
      let message = error.error.errorMessage
      Swal.fire(message, '', 'error')
    });
  }

  setUId(id){
    this.userService.uuid = id;
    this.route.navigateByUrl('/detail')
  }

  sendInvitation(user, e){
    e.target.disabled = true;
    this.userService.sendInvitation(user).subscribe( (res) => {
      if(res){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Invitation sent!',
          showConfirmButton: false,
          timer: 2000
        });
      }
    })
  }

  pageChange(){
    this.getUserList();
  }

  removeApplicationForm(id, index){
    Swal.fire({
      title: 'Are you sure want to remove this Applicant?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result['value']) {
        this.userService.removeApplicationForm(id).subscribe( (res) => {
          this.userList.splice(index, 1);
        });
      }
    })
  }

  searchUser(event, value){
    this.userService.searchUsers(this.p,value).subscribe( (res) => {
      if(res['data']){
        this.userList = res['data']; 
        this.totalSize = res['total'];
      }
    })
  }

  deleteUser(user,index){
    Swal.fire({
      title: 'Are you sure want to remove this User?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result['value']) {
        this.userService.deleteUser(user.id).subscribe( (res) => {
          if(res['data']){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: user.firstName + ' ' + user.lastName + ' deleted successfully!',
              showConfirmButton: false,
              timer: 2000
            });
            this.userList.splice(index, 1);
          }
        },
        error => {
          let message = error.error.errorMessage
          Swal.fire(message, '', 'error')
        });
      }
    })
  }

  checkValue(value,user){
    user.isVerified = value;
    this.userService.updateUser(user).subscribe( (res) => {
      if(res['data']){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Access update successfully!',
          showConfirmButton: false,
          timer: 2000
        });
      }
    },
    error => {
      let message = error.error.errorMessage
      Swal.fire(message, '', 'error')
    });
  }

}
