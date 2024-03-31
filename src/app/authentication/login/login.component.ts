import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginData } from '../../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService:AuthService=inject(AuthService);
  @ViewChild('loginForm') loginForm: NgForm;
  roles:string[]=['Customer','Organizer','Admin'];
  selectedRole: string;
  OnLogin(){
    console.log(this.loginForm)
    const username= this.loginForm.value.username;
    const password=this.loginForm.value.password;
    const loginData= new LoginData(username,password);
    this.authService.login(loginData);
    
  }
}
