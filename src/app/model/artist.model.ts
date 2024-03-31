export class Artist{
    Name:string;
    ArtistUsername:string;
    Timing:string;
    IsBooked:boolean;
    
    constructor(Name:string,ArtistUsername:string, Timing:string){
        this.Name=Name;
        this.Timing=Timing;
        this.IsBooked=false;
        this.ArtistUsername=ArtistUsername;
    }
}