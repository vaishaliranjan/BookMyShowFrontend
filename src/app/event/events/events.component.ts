import { Component, OnInit, inject } from '@angular/core';
import { EventService } from '../../services/event.service';
import { BookingService } from '../../services/booking.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {
  events:any;
  eventService= inject(EventService);
  bookingService= inject(BookingService);
  authService=inject(AuthService);
  showBookingDialog:boolean=false;
  showCancelEventDialog:boolean=false;
  numberOfTickets:number; 
  router=inject(Router);
  selectedEventid:number;
  artistUsername:string='';
  byArtistUsername:boolean=false;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(){
    if(!this.byArtistUsername){
      this.eventService.getEvents().subscribe((events)=>{
        this.events = events;
        console.log(events)
      })
    }
    else{
      this.eventService.getEventsByArtist(this.artistUsername).subscribe((events)=>{
        this.events = events;
        console.log(events)
      })
    }
  }

  ViewAllEvents(){
    this.byArtistUsername=false;
    this.artistUsername="";
    this.loadEvents();
  }

  SearchByArtistUsername(){
    this.byArtistUsername=true;
    this.loadEvents();
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Events of '+ this.artistUsername,
    });
  }

  OnBookTicket(eventId:number){
    this.showBookingDialog=true;
    this.selectedEventid=eventId;
  }

  OnViewBookings(eventId:number){
    this.router.navigate(['bookings'],{queryParams:{'eventId':eventId}})
  }

  AddBooking(){
    console.log(this.selectedEventid)
    const booking= {EventId: this.selectedEventid, NumberOfTickets: this.numberOfTickets}
    this.bookingService.createBooking(booking).subscribe( {
      next:()=>{
        console.log("Bookings created successfully");
        this.showBookingDialog=false;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Tickets booked successfully!!',
        });
        setTimeout(()=>{          
          this.router.navigate(['bookings'], { queryParams: { refresh: new Date().getTime() } });
        },3000);
      },
      error:(err)=>{
        let errorMessage = 'An internal error occurred.';
        if (err.error && err.error.includes('Enter valid tickets')) {
          errorMessage = 'Enter valid number of tickets!';
        } 
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMessage
        });
        this.showBookingDialog=false;
      }
      
      
    });
    
  }


 



  CancelBooking(){
    this.showBookingDialog=false;

  }
  
  OnCancelEvent(){
    this.showCancelEventDialog=true;
  }

  CancelEvent(EventId:number){
    this.eventService.deleteEvent(EventId).subscribe({
      next:()=>{
        console.log("Event Deleted successfully");
        this.showCancelEventDialog=false;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Event deleted successfully!!',
        });
      },
      error:(err)=>{
        let errorMessage = 'An error occurred.';
        if (err.error && err.error.includes('Tickets already booked')) {
          errorMessage = 'Tickets are already booked. Event cannot be cancelled.';
        } 
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMessage
        });
        this.showCancelEventDialog=false;
      }
      
      
    })
  }

  Back(){
    this.showCancelEventDialog=false;
  }

}
