import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-forgot-password',
  templateUrl: './admin-forgot-password.component.html',
  styleUrls: ['./admin-forgot-password.component.scss']
})
export class AdminForgotPasswordComponent implements OnInit {

  forgotForm: FormGroup;
  submitted = false;
  returnUrl: string = 'login';

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authService: AuthService
  ) {
      // redirect to home if already logged in
      // if (this.authService.currentUserValue) {
      //     this.router.navigate(['/']);
      // }
  }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() { return this.forgotForm.controls; }


  onSubmit() {
    this.submitted = true;
    if (this.forgotForm.invalid) {
        return;
    }
    
    this.authService.forgotPassword(this.forgotForm.value)
        .subscribe(
            data => {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Email sent!',
                showConfirmButton: false,
                timer: 2000
              });
              this.submitted = false;
              this.router.navigate([this.returnUrl]);
            },
            error => {
              this.submitted = false;
              let message = error.error.message
              message = message.charAt(0).toUpperCase() + message.slice(1)
              Swal.fire(message, '', 'error')
            });
  }

}
