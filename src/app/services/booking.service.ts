import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class BookingService{
    http:HttpClient=inject(HttpClient);

    getBookings(){
        return this.http.get('https://localhost:44338/api/bookings');     
    }

    createBooking(booking:any){
        return this.http.post('https://localhost:44338/api/bookings', booking);
    }
    getBookingsByEventId(eventid:any){
        
        return this.http.get('https://localhost:44338/api/events/'+eventid+"/bookings");
    }
}