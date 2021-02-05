import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';

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

  @ViewChild(ContactDetailComponent) contactDetail: ContactDetailComponent;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getContactList();
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

  deleteProduct(data){
    // this.userService.getProducts(this.p).subscribe( (res) => {
    //   if(res['data']){
    //     this.contactList = res['data']['products']['rows']; 
    //     this.totalSize = res['data']['products']['count'];   
    //   }
    // })
  }

} 
