import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistService } from '../../services/artist.service';
import { VenueService } from '../../services/venue.service';
import { NgForm } from '@angular/forms';
import { Event } from '../../model/event.model';
import { EventService } from '../../services/event.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent implements OnInit{
  router:Router=inject(Router);
  artist:any;
  venue:any;
  artistService=inject(ArtistService)
  venueService=inject(VenueService)
  eventService=inject(EventService);
  @ViewChild('eventForm') form:NgForm;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  this.artist=this.artistService.getSelectedArtist();
  this.venue=  this.venueService.getSelectedVenue();
  if(this.artist===undefined || this.venue===undefined){
    this.router.navigate(['artists']);
  }
  console.log(this.artist,this.venue)
  }

  OnCreateEvent(){
    const eventName=this.form.value.eventName;
    const numberOfTickets=this.form.value.numberOfTickets;
    const price = this.form.value.price;
    const event=new Event(eventName,this.artist.id,this.venue.venueId,numberOfTickets,price);
    console.log(event);
    this.eventService.createEvent(event).subscribe({
      next:()=>{
        console.log("Event Added successfully");
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Event deleted successfully!!',
        });
        setTimeout(()=>{
          this.router.navigate(['events'], { queryParams: { refresh: new Date().getTime() } });
        },3000)
      },
      error:(err)=>{
        let errorMessage = 'An internal error occurred. Please try again!';
        if (err.error && err.error.includes("This artist can't be choosen")) {
          errorMessage = 'Please choose any other artist.';
          
        } 
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMessage
        });
        setTimeout(()=>{
          this.router.navigate(['artists'], { queryParams: { refresh: new Date().getTime() } });
        },3000)
      }
      
      
    });
  }

  OnSelectArtist(){
    this.router.navigate(['artists']);
    this.artist=this.artistService.getSelectedArtist();
    console.log(this.artist)
  }
}


