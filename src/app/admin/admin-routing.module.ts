import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins/admins.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { CanActivateAdmin } from '../guards/admin.guard';

const routes: Routes = [
  {path:'',component:AdminsComponent,canActivate:[CanActivateAdmin]},
  {path:'add-user', component:AddUsersComponent,canActivate:[CanActivateAdmin]},
  {path:'dashboard',component:AdminDashboardComponent,canActivate:[CanActivateAdmin]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
