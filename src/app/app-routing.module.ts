import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'auth',
    loadChildren:()=>import('./authentication/authentication.module').then(mod=>mod.AuthenticationModule)
  },
  {
    path:'customers',
    loadChildren:()=>import('./customer/customer.module').then(mod=>mod.CustomerModule),
  },
  {
    path:'events',
    loadChildren:()=>import('./event/event.module').then(mod=>mod.EventModule),
  },
  {
    path:'bookings',
    loadChildren:()=>import('./booking/booking.module').then(mod=>mod.BookingModule),   
  },
  {
    path:'organizers',
    loadChildren:()=>import('./organizer/organizer.module').then(mod=>mod.OrganizerModule),  
  },
  {
    path:'admins',
    loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule), 
  },
  {
    path:'artists',
    loadChildren:()=>import('./artist/artist.module').then(mod=>mod.ArtistModule),
  },
  {
    path:'venues',
    loadChildren:()=>import('./venue/venue.module').then(mod=>mod.VenueModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
