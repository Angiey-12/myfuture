import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SectionsModule } from '../sections/sections.module';

import { ContentFromRouteComponent } from './content-from-route.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        SectionsModule
    ],
    declarations: [
      ContentFromRouteComponent,
      DefaultPageComponent,
      NotFoundPageComponent
    ],
    exports: [
      ContentFromRouteComponent
    ],
    providers: []
})
export class HomeModule { }
