import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from "@angular/flex-layout";

import { OrganisationComponent } from './organisation/organisation.component';
import { InstitutionsComponent } from './institutions/institutions.component';

@NgModule({
  declarations: [
    OrganisationComponent,
    InstitutionsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FlexLayoutModule
  ]
})
export class JobsAndCareersModule { }
