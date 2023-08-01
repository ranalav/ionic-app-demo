import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { DashboardShowComponent } from './dashboard-show/dashboard-show.component';


@NgModule({
  declarations: [
    DashboardShowComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ButtonModule
  ]
})
export class HomeModule { }
