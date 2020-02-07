import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { LogoMyfutureComponent } from './components/logo/logo-myfuture/logo-myfuture.component';
import { SectionArticleComponent } from './components/section/section-article/section-article.component';
import { ComponentAnchorDirective } from './directives/component-anchor.directive';
import { AccessibleExternalLinksPipe } from './pipes/accessible-external-links.pipe';

// import { OccupationHeaderComponent } from './components/occupations/occupation-header/occupation-header.component'
import { OccupationLandingComponent } from './components/occupations/occupation-landing/occupation-landing.component'
import { OccupationFooterComponent } from './components/occupations/occupation-footer/occupation-footer.component'
import { OccupationSearchPageComponent } from './components/occupations/occupation-search-page/occupation-search-page.component'
import { OccupationDetailPageComponent } from './components/occupations/occupation-detail-page/occupation-detail-page.component'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SectionArticleComponent,
    LogoMyfutureComponent,
    ComponentAnchorDirective,
    AccessibleExternalLinksPipe,

    // OccupationHeaderComponent,
    OccupationLandingComponent,
    OccupationFooterComponent,
    OccupationSearchPageComponent,
    OccupationDetailPageComponent
  ],
  exports: [
    CommonModule,
    RouterModule,

    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SectionArticleComponent,
    LogoMyfutureComponent,
    ComponentAnchorDirective,

    AccessibleExternalLinksPipe,

    // OccupationHeaderComponent,
    OccupationLandingComponent,
    OccupationFooterComponent,
    OccupationSearchPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ChartsModule
  ]
})
export class SharedModule { }
