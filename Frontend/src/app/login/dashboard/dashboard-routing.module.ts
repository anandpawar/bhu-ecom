import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard.component';
import { AdminGuard } from 'src/app/shared/admin.guard';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      { path: '', component: AdminHomeComponent, canActivate: [AdminGuard] },
      { path: 'users', component: UserListComponent, canActivate: [AdminGuard] },
      { path: 'products', component: ContactListComponent, canActivate: [AdminGuard] },
      { path: 'user-detail', component: UserDetailComponent, canActivate: [AdminGuard] },
      { path: 'contact-detail', component: ContactDetailComponent, canActivate: [AdminGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
