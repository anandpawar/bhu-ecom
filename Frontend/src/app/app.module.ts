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
import { DashboardModule } from './login/dashboard/dashboard.module';
import { ClientPortalModule } from './layout/client-portal/client-portal.module';
import { ForgotPasswordComponent } from './layout/client-portal/forgot-password/forgot-password.component';
import { AdminForgotPasswordComponent } from './login/admin-forgot-password/admin-forgot-password.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AdminForgotPasswordComponent
  ],
  imports: [
    CommonModule,
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
