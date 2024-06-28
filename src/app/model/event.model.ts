export class Event{
    EventName:string;
    ArtistId:number;
    VenueId:number;
    NumberOfTickets:number;
    Price:number;

    constructor(EventName:string,ArtistId:number,VenueId:number,NumberOfTickets:number,Price:number){
        this.EventName=EventName;
        this.ArtistId=ArtistId;
        this.VenueId=VenueId;
        this.NumberOfTickets=NumberOfTickets;
        this.Price=Price;
    }
}