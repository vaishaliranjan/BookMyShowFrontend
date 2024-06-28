import { Component, OnInit,inject } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit {
  bookings:any;
  bookingService= inject(BookingService);
  authService= inject(AuthService);
  activatedRoute=inject(ActivatedRoute);
  eventId:string;
  ngOnInit(): void {
    this.loadBookings()
  }

  loadBookings(){
    this.activatedRoute.queryParamMap.subscribe((param)=>{
      this.eventId= param.get('eventId');
      if(this.eventId==undefined){
        this.bookingService.getBookings().subscribe((bookings)=>{
          this.bookings = bookings;
          console.log(bookings)
        })
      }
      else{
        this.bookingService.getBookingsByEventId(this.eventId).subscribe((bookings)=>{
          this.bookings = bookings;
          console.log(bookings)
        })
      }
    })
   
  }
}


