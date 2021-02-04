import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AssessmentService } from '../../services/assessment.service';

export class Contact {
  public name: string;
  public phone: string;
  public email: string;
  public subject: string;
  public message: string;
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {

  model = new Contact();

  constructor(private assessmentService: AssessmentService) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    this.assessmentService.createContact(form.value).subscribe(res => {
      if(res['message']){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Contact submitted successfully!',
          showConfirmButton: false,
          timer: 1500
        });
        form.reset();
      }
    });
  }
}
