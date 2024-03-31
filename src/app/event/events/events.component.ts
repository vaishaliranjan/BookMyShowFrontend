import { Component, OnInit, inject } from '@angular/core';
import { EventService } from '../../services/event.service';
import { BookingService } from '../../services/booking.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
    this.bookingService.createBooking(booking).subscribe(() => {
      this.showBookingDialog=false;
      this.router.navigate(['bookings'], { queryParams: { refresh: new Date().getTime() } });
    });
    
  }

  CancelBooking(){
    this.showBookingDialog=false;

  }
  
  OnCancelEvent(){
    this.showCancelEventDialog=true;
  }

  CancelEvent(EventId:number){
    this.eventService.deleteEvent(EventId);
    this.showCancelEventDialog=false;
  }

  Back(){
    this.showCancelEventDialog=false;
  }

}
