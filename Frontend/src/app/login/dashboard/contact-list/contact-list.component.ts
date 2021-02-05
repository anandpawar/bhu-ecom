import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  p: number = 1;
  contactList: any;
  singleContact: any;
  totalSize: number;
  user;

  @ViewChild(ContactDetailComponent) contactDetail: ContactDetailComponent;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getContactList();
    let user = localStorage.getItem('currentUser');
    this.user = JSON.parse(user);
    this.userService.getProdListObservable().subscribe((data)=>{
      if(data){
        this.getContactList();
      }
    })  
  }

  getContactList(){
    this.userService.getProducts(this.p).subscribe( (res) => {
      if(res['data']){
        this.contactList = res['data']['products']['rows']; 
        this.totalSize = res['data']['products']['count'];   
      }
    })
  }

  editProduct(data){
    this.contactDetail.show(data);
  }

  addProduct(){
    this.contactDetail.show();
  }

  pageChange(){
    this.getContactList();
  }

  deleteProduct(data, index){
    Swal.fire({
      title: 'Are you sure want to remove this Product?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result['value']) {
        this.userService.deleteProduct(data.id).subscribe( (res) => {
          if(res['data']){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: data.name +' deleted successfully!',
              showConfirmButton: false,
              timer: 2000
            });
            this.contactList.splice(index, 1);
          }
        },
        error => {
          let message = error.error.errorMessage
          Swal.fire(message, '', 'error')
        });
      }
    })
  }

} 
