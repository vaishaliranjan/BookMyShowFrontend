import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.css'
})
export class AdminsComponent implements OnInit{
  admins:any;
  adminService= inject(UserService);
  adminId:string;
  showDeleteDialog:boolean=false;
  
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
      this.showDeleteDialog=false;
    })
  }

  CancelDeleteAdmin(){
    this.showDeleteDialog=false;
  }
}
