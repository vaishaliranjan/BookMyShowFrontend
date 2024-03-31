import { Component, inject } from '@angular/core';
import { VenueService } from '../../services/venue.service';
import { Router } from '@angular/router';
import { Message } from "primeng/api"; 
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrl: './venues.component.css'
})
export class VenuesComponent {
  venues:any[];
  venueService= inject(VenueService);
  messageService:Message[];
  router=inject(Router);
  showAddVenueDialog= false;
  place:string;
  authService=inject(AuthService);

  ngOnInit(): void {
    this.loadVenues();
  }

  loadVenues(){
    this.venueService.getVenues().subscribe((venues:any)=>{
      this.venues = venues;
      console.log(venues)
    })
  }

  OnSelectVenue(venue:any){
    this.venueService.setSelectedVenue(venue);
    this.router.navigate(['events','create-event'])
  }

  OnAddNewVenue(){
    this.showAddVenueDialog=true;
  }

  AddNewVenue(){
    const venue={place:this.place};
    this.venueService.addVenue(venue).subscribe(()=>{
      this.loadVenues();
      console.log("venue added")
    })
    this.showAddVenueDialog=false;
    this.messageService=[{severity:"success",summary:"Venue Added Successfully"}];
    
  }
  CancelAddVenue(){
    this.showAddVenueDialog=false;
  }

  
}
