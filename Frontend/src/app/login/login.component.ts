import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

export class Login {
  public email: string;
  public password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string = 'dashboard';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
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
    
    this.authService.login(this.loginForm.value)
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
