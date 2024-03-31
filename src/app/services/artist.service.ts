import { Injectable, inject } from "@angular/core";
import { LoginData } from "../model/login.model";
import { HttpClient } from "@angular/common/http";
import { RegisterData } from "../model/register.model";
import { Artist } from "../model/artist.model";

@Injectable({
    providedIn:'root'
})
export class ArtistService{
    selectedArtist: any; 
    http:HttpClient=inject(HttpClient);

    getArtists(){
        return this.http.get('https://localhost:44338/api/artists');
        
    }

    setSelectedArtist(artist: any) {
        this.selectedArtist = artist;
    }

    getSelectedArtist() {
        return this.selectedArtist;
    }

    addArtist(artist:Artist){
        return this.http.post('https://localhost:44338/api/artists', artist);
    }

    
}