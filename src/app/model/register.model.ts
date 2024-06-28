import { Inject, Injectable } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";

@Injectable({
    providedIn:'root'
})
export class RegisterData{
    name:string;
    username:string;
    email:string;
    password:string;
    confirmPassword:string;

    constructor(fullname: string,username:string,email:string,password:string,confirmPassword:string){
        this.name=fullname;
        this.username=username;
        this.email=email;
        this.password=password;
        this.confirmPassword=confirmPassword;
    }
}