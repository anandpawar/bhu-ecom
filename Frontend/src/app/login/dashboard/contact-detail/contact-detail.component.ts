import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  contactDetail: any;

  @ViewChild('content') content: ElementRef;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  show(data?){
    if(data){

    }
    this.modalService.open(this.content, {
      ariaLabelledBy: 'modal-basic-title'
    });
  }
}
