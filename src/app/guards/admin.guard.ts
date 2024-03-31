import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export const CanActivateAdmin=()=>{
    const authService:AuthService=inject(AuthService);
    const route:Router=inject(Router);
    
    if(authService.getCookies()=='admin'){
        return true;
    }
    else{
        route.navigate(['auth','login'])
        return false;
    }
}