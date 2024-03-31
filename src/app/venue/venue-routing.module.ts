import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenuesComponent } from './venues/venues.component';
import { CanActivateVenue } from '../guards/venue.guard';

const routes: Routes = [
  {path:'', component:VenuesComponent,canActivate:[CanActivateVenue]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenueRoutingModule { }
