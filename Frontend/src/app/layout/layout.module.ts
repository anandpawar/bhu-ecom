import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { FreeAssessmentComponent } from './free-assessment/free-assessment.component';
import { SelectAssessmentFormsComponent } from './free-assessment/select-assessment-forms/select-assessment-forms.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ImmigrationComponent } from './immigration/immigration.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GeneralFormComponent } from './free-assessment/forms/general-form/general-form.component';
import { WorkFormComponent } from './free-assessment/forms/work-form/work-form.component';
import { StudyFormComponent } from './free-assessment/forms/study-form/study-form.component';
import { DynamicFormLoaderComponent } from './free-assessment/dynamic-form-loader/dynamic-form-loader.component';
import { DynamicFormDirective } from '../directives/dynamic-form.directive';
import { ProvincialAssessmentComponent } from './provincial-assessment/provincial-assessment.component';
import { EducationDetailComponent } from './free-assessment/forms/general-form/education-detail/education-detail.component';
import { WorkHistoryDetailComponent } from './free-assessment/forms/general-form/work-history-detail/work-history-detail.component';
import { CanadianJobComponent } from './free-assessment/forms/general-form/canadian-job/canadian-job.component';
import { CanadianRelativeComponent } from './free-assessment/forms/general-form/canadian-relative/canadian-relative.component';
import { BusinessDetailComponent } from './free-assessment/forms/work-form/business-detail/business-detail.component';
import { BusinessAssessmentComponent } from './business-assessment/business-assessment.component';
import { StudyAssessmentComponent } from './study-assessment/study-assessment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpressEntryComponent } from './info-pages/express-entry/express-entry.component';
import { ProvincialNomineeComponent } from './info-pages/provincial-nominee/provincial-nominee.component';
import { StartUpVisaComponent } from './info-pages/start-up-visa/start-up-visa.component';
import { FamilySponsorshipComponent } from './info-pages/family-sponsorship/family-sponsorship.component';
import { StudyInCanadaComponent } from './info-pages/study-in-canada/study-in-canada.component';
import { VisitCanadaComponent } from './info-pages/visit-canada/visit-canada.component';
import { ExpressProvinicialComponent } from './info-pages/express-provinicial/express-provinicial.component';
import { WorkInCanadaComponent } from './info-pages/work-in-canada/work-in-canada.component';
import { CaregiversComponent } from './info-pages/caregivers/caregivers.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent,
    FreeAssessmentComponent,
    SelectAssessmentFormsComponent,
    AboutUsComponent,
    ImmigrationComponent,
    ContactUsComponent,
    GeneralFormComponent,
    WorkFormComponent,
    StudyFormComponent,
    DynamicFormLoaderComponent,
    DynamicFormDirective,
    ProvincialAssessmentComponent,
    EducationDetailComponent,
    WorkHistoryDetailComponent,
    CanadianJobComponent,
    CanadianRelativeComponent,
    BusinessDetailComponent,
    BusinessAssessmentComponent,
    StudyAssessmentComponent,
    ExpressEntryComponent,
    ProvincialNomineeComponent,
    StartUpVisaComponent,
    FamilySponsorshipComponent,
    StudyInCanadaComponent,
    VisitCanadaComponent,
    ExpressProvinicialComponent,
    WorkInCanadaComponent,
    CaregiversComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LayoutModule { }
