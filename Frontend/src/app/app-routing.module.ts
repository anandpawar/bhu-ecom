import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './shared/admin.guard';
import { AdminForgotPasswordComponent } from './login/admin-forgot-password/admin-forgot-password.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-forgot-password', component: AdminForgotPasswordComponent },
  { 
    path: 'dashboard', 
    loadChildren: './login/dashboard/dashboard.module#DashboardModule',
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
