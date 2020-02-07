import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './_core/core.module';
import { SharedModule } from './_shared/shared.module';

import { HomeModule } from './home/home.module';
import { JobsAndCareersModule } from './jobs-and-careers/jobs-and-careers.module';
import { OccupationModule } from './study-and-training/occupations/occupation.module'
import { ChartsModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';



@NgModule({
  declarations: [
    AppComponent,
    // FilterPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FlexLayoutModule,

    CoreModule,
    SharedModule,

    HomeModule,
    JobsAndCareersModule,
    OccupationModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
