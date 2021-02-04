import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './layout/home/home.component';
import { FreeAssessmentComponent } from './layout/free-assessment/free-assessment.component';
import { AboutUsComponent } from './layout/about-us/about-us.component';
import { ImmigrationComponent } from './layout/immigration/immigration.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';
import { ProvincialAssessmentComponent } from './layout/provincial-assessment/provincial-assessment.component';
import { BusinessAssessmentComponent } from './layout/business-assessment/business-assessment.component';
import { StudyAssessmentComponent } from './layout/study-assessment/study-assessment.component';
import { AdminGuard } from './shared/admin.guard';
import { ExpressEntryComponent } from './layout/info-pages/express-entry/express-entry.component';
import { ProvincialNomineeComponent } from './layout/info-pages/provincial-nominee/provincial-nominee.component';
import { StartUpVisaComponent } from './layout/info-pages/start-up-visa/start-up-visa.component';
import { FamilySponsorshipComponent } from './layout/info-pages/family-sponsorship/family-sponsorship.component';
import { StudyInCanadaComponent } from './layout/info-pages/study-in-canada/study-in-canada.component';
import { VisitCanadaComponent } from './layout/info-pages/visit-canada/visit-canada.component';
import { ExpressProvinicialComponent } from './layout/info-pages/express-provinicial/express-provinicial.component';
import { WorkInCanadaComponent } from './layout/info-pages/work-in-canada/work-in-canada.component';
import { CaregiversComponent } from './layout/info-pages/caregivers/caregivers.component';
import { ForgotPasswordComponent } from './layout/client-portal/forgot-password/forgot-password.component';
import { AdminForgotPasswordComponent } from './login/admin-forgot-password/admin-forgot-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
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
