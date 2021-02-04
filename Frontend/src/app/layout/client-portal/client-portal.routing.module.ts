import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientPortalComponent } from './client-portal.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientHomeComponent } from './client-dashboard/client-home/client-home.component';
import { ClientDetailComponent } from './client-dashboard/client-detail/client-detail.component';
import { ClientUploadDocumentComponent } from './client-dashboard/client-upload-document/client-upload-document.component';
import { ClientStartChatComponent } from './client-dashboard/client-start-chat/client-start-chat.component';

const routes: Routes = [
  {
    path: '',
    component: ClientPortalComponent
  },
  {
    path: '',
    component: ClientDashboardComponent,
    canActivate: [],
    children: [
      { path: 'client-dashboard', component: ClientHomeComponent, canActivate: [] },
      { path: 'client-detail', component: ClientDetailComponent, canActivate: [] },
      { path: 'client-upload-document', component: ClientUploadDocumentComponent, canActivate: [] },
      { path: 'client-start-chat', component: ClientStartChatComponent, canActivate: [] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPortalRoutingModule { }
