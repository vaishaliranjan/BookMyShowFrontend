import { Injectable, inject } from "@angular/core";
import { LoginData } from "../model/login.model";
import { HttpClient } from "@angular/common/http";
import { RegisterData } from "../model/register.model";
import { Route, Router } from "@angular/router";
import { AddUserData } from "../model/add-user.model";
import { CookieService } from "ngx-cookie-service";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    http:HttpClient=inject(HttpClient);
    router:Router=inject(Router);
    cookieService: CookieService = inject(CookieService);
    roleId:number;
    setCookies(){
        if(this.roleId===1){
            this.cookieService.set("roleId","admin");
        }
        else if(this.roleId===2){
            this.cookieService.set("roleId","organizer");
        }
        else if(this.roleId===3){
            this.cookieService.set("roleId","customer");
        }
        this.cookieService.set("authenticated","yes")
        
      }
    
    getCookies(){
        return this.cookieService.get("roleId");
    }

    isAuthenticated(){
        return this.cookieService.get("authenticated");
    }
    

    login(loginData:LoginData){
        this.http.post('https://localhost:44338/api/authentication/login', loginData).subscribe( (userRoleId:number) => {
            console.log(userRoleId)
            this.roleId=userRoleId;
            this.setCookies();

            if (userRoleId === 1) {
              this.router.navigate(['admins','dashboard']);
              
            } else if(userRoleId===2) {
              this.router.navigate(['organizers','dashboard']);
              
            }
            else if (userRoleId===3){
                this.router.navigate(['customers','dashboard'])
                
            }
            else{
                this.router.navigate(['not-found'])
            }
            
          }
        )
    }

    register(registerData:RegisterData){
        this.http.post('https://localhost:44338/api/authentication/register', registerData).subscribe(()=>{
            console.log("Registered successfully")
        })
    }

    addUser(userData:AddUserData){
        console.log(userData);              
        return this.http.post('https://localhost:44338/api/authentication/users', userData);
    }

    logout(){
        this.http.post('https://localhost:44338/api/authentication/logout',{withCredentials:true}).subscribe(()=>{
            console.log("Logged Out successfully")
        }) 
        this.router.navigate(['auth','login'])
        this.cookieService.deleteAll();
    }
}