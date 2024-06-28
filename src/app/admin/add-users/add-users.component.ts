import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AddUserData } from '../../model/add-user.model';
import { Router } from '@angular/router';
import {  MessageService } from "primeng/api"; 

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.css',
  providers:[
    MessageService
  ]
})
export class AddUsersComponent {
  authService:AuthService= inject(AuthService);
  router:Router=inject(Router);
  @ViewChild('registrationForm') loginForm: NgForm;
  role:string;
  role_id:string;
  constructor(private messageService: MessageService) { }


  OnAddUser(){
    console.log(this.loginForm)
    const name=this.loginForm.value.name;
    const email=this.loginForm.value.email;
    const username= this.loginForm.value.username;
    const password=this.loginForm.value.password;
    const confirmPassword= this.loginForm.value.confirmPassword;
    if(this.role==="admin"){
      this.role_id="1";
    }
    else if(this.role==='organizer'){
      this.role_id="2";
    }
    else if(this.role==='customer'){
      this.role_id="3";
    }
    const userData=new AddUserData(name,username,email,password,confirmPassword,this.role_id);
    this.authService.addUser(userData).subscribe({
      next:()=>{
        console.log("User added successfully!");
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'User added successfully!!',
        });
        this.loginForm.reset();
      },
      error:(err)=>{
        let errorMessage = 'An error occurred.';
        if (err.error && err.error.includes('User already exists')) {
          errorMessage = 'User already exists';
        } else {
          errorMessage = 'Form inputs are not correct. Please fill the form again.';
        }
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMessage
        });
      }
    })
   

    
  }

  OnClick(){
    console.log("clicked")
    this.messageService.add({
      severity: 'error',
      summary: 'Info',
      detail: 'Message Content',
  });
  }
}
