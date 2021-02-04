import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-client-upload-document',
  templateUrl: './client-upload-document.component.html',
  styleUrls: ['./client-upload-document.component.scss']
})

export class ClientUploadDocumentComponent {

  uploader:FileUploader = new FileUploader({ });
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean;
  response:string;
  userId: any;
  uploadedDocuments: any;

  constructor (public userService: UserService){
    let user = localStorage.getItem('currentUser');
    user = JSON.parse(user);
    let tokenData = localStorage.getItem('tokenData');
    tokenData = JSON.parse(tokenData);
    if(user["id"]){  
      this.userId = user["id"];
      const URL = `${environment.apiURL}user/${user['id']}/documents`;
      const TOKEN = `Bearer ${tokenData['token']}`
      this.uploader = new FileUploader({
        url: URL,
        authToken: TOKEN,
        disableMultipart : false,
        autoUpload: false,
        method: 'post',
        itemAlias: 'media'
      });
   
      this.hasBaseDropZoneOver = false;
      this.hasAnotherDropZoneOver = false;
   
      this.response = '';
   
      this.uploader.response.subscribe( res => this.response = res );
    }
  }

  ngOnInit() {
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }
   }
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
    console.log(file);
  }

  public getDocuments(){
    this.userService.getDocuments(this.userId).subscribe( (res) => {
      if(res){
        this.uploadedDocuments = res; 
      }
    })
  }

  public removeDocument(id, index){
    Swal.fire({
      title: 'Are you sure want to remove this Document?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result['value']) {
        this.userService.removeDocument(this.userId,id).subscribe( (res) => {
          this.uploadedDocuments.splice(index, 1);
        });
      }
    })
  }
}
