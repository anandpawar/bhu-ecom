import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientPortalRoutingModule } from './client-portal.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientPortalComponent } from './client-portal.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientHeaderComponent } from './client-header/client-header.component';
import { ClientHomeComponent } from './client-dashboard/client-home/client-home.component';
import { ClientDetailComponent } from './client-dashboard/client-detail/client-detail.component';
import { ClientUploadDocumentComponent } from './client-dashboard/client-upload-document/client-upload-document.component';
import { ClientStartChatComponent } from './client-dashboard/client-start-chat/client-start-chat.component';
import { ClientSidebarComponent } from './client-sidebar/client-sidebar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FileSelectDirective, FileUploader, FileUploadModule } from 'ng2-file-upload';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ClientPortalComponent,
    ClientDashboardComponent,
    ClientHeaderComponent,
    ClientHomeComponent,
    ClientDetailComponent,
    ClientUploadDocumentComponent,
    ClientStartChatComponent,
    ClientSidebarComponent,
    // FileSelectDirective,
    //FileUploader,
    
  ],
  imports: [
    // BrowserModule,
    //     BrowserAnimationsModule,
    CommonModule,
    ClientPortalRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatIconModule,
    FileUploadModule 
  ]
})
export class ClientPortalModule { }
