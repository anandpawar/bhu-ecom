import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoginComponent } from './login/login.component';
import { LayoutModule } from './layout/layout.module';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { AdminHeaderComponent } from './login/admin-header/admin-header.component';
import { AdminSidebarComponent } from './login/admin-sidebar/admin-sidebar.component';
import { UserListComponent } from './login/dashboard/user-list/user-list.component';
import { AdminHomeComponent } from './login/dashboard/admin-home/admin-home.component';
import { DashboardModule } from './login/dashboard/dashboard.module';
import { AuthInterceptor } from './shared/auth.interceptor';
import { LanguagePipe } from './shared/language.pipe';
import { DurationPipe } from './shared/duration.pipe';
import { ClientPortalComponent } from './layout/client-portal/client-portal.component';
import { ClientPortalModule } from './layout/client-portal/client-portal.module';
import { ForgotPasswordComponent } from './layout/client-portal/forgot-password/forgot-password.component';
import { AdminForgotPasswordComponent } from './login/admin-forgot-password/admin-forgot-password.component';
import { ClientDashboardComponent } from './layout/client-portal/client-dashboard/client-dashboard.component';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { MatFormFieldModule } from '@angular/material/form-field';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';
import { ChatListComponent } from './login/dashboard/chat-list/chat-list.component';
import { AdminStartCharComponent } from './login/dashboard/admin-start-char/admin-start-char.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AdminForgotPasswordComponent
  ],
  imports: [
    LayoutModule,
    DashboardModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ClientPortalModule,
    MatFormFieldModule 
  ],
  providers: [
    WebsocketService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
