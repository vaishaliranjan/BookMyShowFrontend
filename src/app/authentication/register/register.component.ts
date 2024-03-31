import { Component, ViewChild, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { RegisterData } from '../../model/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  authService:AuthService=inject(AuthService);
  @ViewChild('registrationForm') loginForm: NgForm;
  OnRegister(){
    console.log(this.loginForm)
    const name=this.loginForm.value.name;
    const email=this.loginForm.value.email;
    const username= this.loginForm.value.username;
    const password=this.loginForm.value.password;
    const confirmPassword= this.loginForm.value.confirmPassword;
    const registerData=new RegisterData(name,username,email,password,confirmPassword);
    this.authService.register(registerData)
  }
}
