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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string = 'login';

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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
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
    
    this.authService.register(this.loginForm.value)
        .subscribe(
            data => {
              this.submitted = false;
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'User registered successfully!',
                showConfirmButton: false,
                timer: 3000
              });
              this.router.navigate([this.returnUrl]);
            },
            error => {
              this.submitted = false;
              let message = error.error.errorMessage
              Swal.fire(message, '', 'error')
            });
  }

}
