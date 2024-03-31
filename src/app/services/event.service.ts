import { Injectable, inject } from "@angular/core";
import { LoginData } from "../model/login.model";
import { HttpClient } from "@angular/common/http";
import { RegisterData } from "../model/register.model";
import { User } from "../model/user.model";
import { Event } from "../model/event.model";

@Injectable({
    providedIn:'root'
})
export class EventService{
    http:HttpClient=inject(HttpClient);

    getEvents(){
        return this.http.get('https://localhost:44338/api/events');
        
    }

    createEvent(event:Event){
        return this.http.post('https://localhost:44338/api/events', event);
    }
    
    deleteEvent(eventId:number){
        this.http.delete('https://localhost:44338/api/events/'+eventId).subscribe(()=>{
            console.log("Event Deleted successfully")
        })
    }

    getEventsByArtist(artistUsername:string){
        return this.http.get('https://localhost:44338/api/artists/'+artistUsername+"/events");
    }

    
}