import { Component, inject } from '@angular/core';
import { VenueService } from '../../services/venue.service';
import { Router } from '@angular/router';
import { Message, MessageService } from "primeng/api"; 
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrl: './venues.component.css'
})
export class VenuesComponent {
  venues:any[];
  venueService= inject(VenueService);
  router=inject(Router);
  showAddVenueDialog= false;
  place:string;
  authService=inject(AuthService);
  constructor(private messageService: MessageService) { }

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
    this.venueService.addVenue(venue).subscribe({
      next:()=>{
        this.loadVenues();
        console.log("Venue added successfully");
        this.showAddVenueDialog=false;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Venue added successfully!!',
        });
      },
      error:(err)=>{
        let errorMessage = 'An error occurred.';
        if (err.error && err.error.includes('Invalid DateTime')) {
          errorMessage = 'Invalid DateTime';
        } 
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMessage
        });
        this.showAddVenueDialog=false;
      }
      
      
    })
    
  }
  CancelAddVenue(){
    this.showAddVenueDialog=false;
  }

  
}
