import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.css',
  providers:[
    MessageService
  ]
})
export class AdminsComponent implements OnInit{
  admins:any;
  adminService= inject(UserService);
  adminId:string;
  showDeleteDialog:boolean=false;
  constructor(private messageService: MessageService) { }
  
  ngOnInit(): void {
    this.loadAdmins();
  }

  loadAdmins(){
    this.adminService.getAdmins().subscribe((admins)=>{
      this.admins = admins;
      console.log(admins)
    })
  }

  OnDeleteAdmin(userId:string){
    this.adminId=userId;
    this.showDeleteDialog=true;
  }

  DeleteAdmin(){
    this.adminService.delete(this.adminId,"admins").subscribe(()=>{
      this.loadAdmins();
      console.log("Admin Delete Successfully")
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Admin deleted successfully!!',
      });
      this.showDeleteDialog=false;
      
    })
  }

  CancelDeleteAdmin(){
    this.showDeleteDialog=false;
  }
}
