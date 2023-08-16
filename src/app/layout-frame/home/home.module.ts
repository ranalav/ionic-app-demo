import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DashboardShowComponent } from './dashboard-show/dashboard-show.component';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    DashboardShowComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ButtonModule,
    TableModule
  ]
})
export class HomeModule { }
