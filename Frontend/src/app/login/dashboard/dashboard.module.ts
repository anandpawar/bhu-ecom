import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/shared/auth.interceptor';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LanguagePipe } from 'src/app/shared/language.pipe';
import { DurationPipe } from 'src/app/shared/duration.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatListComponent } from './chat-list/chat-list.component';
import { AdminStartCharComponent } from './admin-start-char/admin-start-char.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { EmailPopupComponent } from './applicant-list/email-popup/email-popup.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    UserListComponent,
    ApplicantListComponent,
    DashboardComponent,
    ContactListComponent,
    UserDetailComponent,
    ContactDetailComponent,
    ChatListComponent,
    AdminStartCharComponent,
    EmailPopupComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxPaginationModule,
    NgbModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
})
export class DashboardModule { }
