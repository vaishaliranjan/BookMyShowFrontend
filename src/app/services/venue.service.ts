import { Injectable, inject } from "@angular/core";
import { LoginData } from "../model/login.model";
import { HttpClient } from "@angular/common/http";
import { RegisterData } from "../model/register.model";

@Injectable({
    providedIn:'root'
})
export class VenueService{
    http:HttpClient=inject(HttpClient);
    selectedVenue:any
    getVenues(){
        return this.http.get('https://localhost:44338/api/venues');     
    }

    setSelectedVenue(venue: any) {
        this.selectedVenue = venue;
    }

    getSelectedVenue() {
        return this.selectedVenue;
    }
    addVenue(venue:any){
        return this.http.post('https://localhost:44338/api/venues', venue);
    }

    
}