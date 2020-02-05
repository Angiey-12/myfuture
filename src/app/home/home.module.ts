import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { SharedModule } from '../_shared/shared.module';

import { SectionsModule } from '../sections/sections.module';

@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      RouterModule,
      SharedModule,
      SectionsModule
    ],
    declarations: [
      HomeComponent
    ],
    exports: [ HomeComponent ],
    providers: []
})
export class HomeModule { }
