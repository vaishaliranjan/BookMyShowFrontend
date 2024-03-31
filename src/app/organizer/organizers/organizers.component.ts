import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-organizers',
  templateUrl: './organizers.component.html',
  styleUrl: './organizers.component.css'
})
export class OrganizersComponent implements OnInit{
  organizers:any;
  organizerService= inject(UserService);
  showDeleteDialog:boolean=false;
  organizerId:string;

  ngOnInit(): void {
    this.loadOrganizers()
  }

  loadOrganizers(){
    this.organizerService.getOrganizers().subscribe((organizers)=>{
      this.organizers = organizers;
      console.log(organizers)
    })
  }

  OnDeleteOrganizer(userId:string){
    this.organizerId=userId;
    this.showDeleteDialog=true;
  }

  DeleteOrganizer(){
    this.organizerService.delete(this.organizerId,"organizers").subscribe(()=>{
      this.loadOrganizers();
      console.log("Organizer Delete Successfully")
      this.showDeleteDialog=false;
    })
  }

  CancelDeleteOrganizer(){
    this.showDeleteDialog=false;
  }
}
