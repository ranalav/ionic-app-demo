import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/demo/components/dashboard/dashboard.component';
import { DashboardShowComponent } from './dashboard-show/dashboard-show.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
