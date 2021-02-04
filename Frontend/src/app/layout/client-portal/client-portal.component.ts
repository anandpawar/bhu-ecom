import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-portal',
  templateUrl: './client-portal.component.html',
  styleUrls: ['./client-portal.component.scss']
})

export class ClientPortalComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string = 'client-dashboard';

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
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    
    this.authService.userLogin(this.loginForm.value)
        .subscribe(
            data => {
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
