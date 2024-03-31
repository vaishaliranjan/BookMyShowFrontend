import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export const CanActivateVenue=()=>{
    const authService:AuthService=inject(AuthService);
    const route:Router=inject(Router);
    
    if(authService.getCookies()==="admin"||authService.getCookies()==="organizer"){
        return true;
    }
    else{
        route.navigate(['auth','login'])
        return false;
    }
}