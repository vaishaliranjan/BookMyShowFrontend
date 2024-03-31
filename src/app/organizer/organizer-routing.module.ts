import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizersComponent } from './organizers/organizers.component';
import { OrganizerDashboardComponent } from './organizer-dashboard/organizer-dashboard.component';
import { CanActivateOrganizer } from '../guards/organizer.guard';
import { CanActivateAdmin } from '../guards/admin.guard';

const routes: Routes = [
  {path:"",component:OrganizersComponent,canActivate:[CanActivateAdmin]},
  {path:'dashboard', component:OrganizerDashboardComponent,canActivate:[CanActivateOrganizer]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizerRoutingModule { }
