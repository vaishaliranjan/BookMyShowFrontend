import { Component, OnInit, inject } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Artist } from '../../model/artist.model';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.css',
})
export class ArtistsComponent implements OnInit {
  artists:any;
  artistService= inject(ArtistService);
  router=inject(Router);
  showAddArtistDialog:boolean=false;
  artistName:string;
  timing:string;
  datePipe=inject(DatePipe);
  messageService=inject(MessageService);
  artistUsername:string;
  authService=inject(AuthService);

  ngOnInit(): void {
    this.loadArtists();
  }

  loadArtists(){
    this.artistService.getArtists().subscribe((artists)=>{
      this.artists = artists;
      console.log(artists)
    })
  }

  OnSelectArtist(artist:any){
    this.artistService.setSelectedArtist(artist);
    this.router.navigate(['venues'])
  }

  OnAddNewArtist(){
    this.showAddArtistDialog=true;
  }

  AddNewArtist(){
    this.timing=this.datePipe.transform(this.timing,'dd-MM-yyyyTHH:mm:ss');
    const artist= new Artist(this.artistName,this.artistUsername,this.timing);
   
    this.artistService.addArtist(artist).subscribe(()=>{
      console.log("Artist added successfully");
      this.loadArtists()
      this.showAddArtistDialog=false;
      this.messageService.add({ 
        key:'topright',
        severity: 'success', 
        summary: 'GeeksforGeeks', 
        detail: 'Top right message', 
      });
      
     })

  }

  CancelAddArtist(){
    this.showAddArtistDialog=false;
  }
}
