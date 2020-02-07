import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContentFromRouteComponent } from './content-from-route/content-from-route.component';
import { OrganisationComponent } from './jobs-and-careers/organisation/organisation.component';
import { InstitutionsComponent } from './jobs-and-careers/institutions/institutions.component';
import { OccupationComponent } from './study-and-training/occupations/occupation.component';
import { OccupationLandingComponent } from './_shared/components/occupations/occupation-landing/occupation-landing.component';
import { OccupationSearchPageComponent } from './_shared/components/occupations/occupation-search-page/occupation-search-page.component';
import { OccupationDetailPageComponent } from './_shared/components/occupations/occupation-detail-page/occupation-detail-page.component';
import { TermofuseComponent } from './term-of-use/term-of-use.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'organisations', component: OrganisationComponent },
  { path: 'institutions', component: InstitutionsComponent },
  { path: 'occupations', 
    component: OccupationComponent, 
    children: [
      { path: '', component: OccupationLandingComponent, pathMatch: 'full' },
      { path: ':value', component: OccupationSearchPageComponent, pathMatch: 'full', },
      { path: ':value/:detail', component: OccupationDetailPageComponent, pathMatch: 'full' }
    ]
  }, 
  { path: 'termsofuse', component: TermofuseComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: ContentFromRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
