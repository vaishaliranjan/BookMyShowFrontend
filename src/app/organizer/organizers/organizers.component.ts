import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-organizers',
  templateUrl: './organizers.component.html',
  styleUrl: './organizers.component.css',
  providers:[
    MessageService
  ]
})
export class OrganizersComponent implements OnInit{
  organizers:any;
  organizerService= inject(UserService);
  showDeleteDialog:boolean=false;
  organizerId:string;
  constructor(private messageService: MessageService) { }

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
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Organizer deleted successfully!!',
      });
    })
  }

  CancelDeleteOrganizer(){
    this.showDeleteDialog=false;
  }
}
