import { Inject, Injectable } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";

@Injectable({
    providedIn:'root'
})
export class AddUserData{
    name:string;
    username:string;
    email:string;
    password:string;
    confirmPassword:string;
    RoleId:string;

    constructor(fullname:string,username:string,email:string,password:string,confirmPassword:string,role:string){
        this.name=fullname;
        this.username=username;
        this.email=email;
        this.password=password;
        this.confirmPassword=confirmPassword;
        this.RoleId=role;
    }
}