import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from './../shared/shared.module';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {FormsModule} from '@angular/forms';
import {ComponentsModule} from 'src/app/components/components.module';

import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';




@NgModule({
  declarations: [    
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    DashboardComponent,
    AccountSettingsComponent
  ],
  exports:[
    ProgressComponent,
    DashboardComponent,
    Grafica1Component,
    AccountSettingsComponent,
    PagesComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule]
})
export class PagesModule { }
