import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export const CanActivateCustomer=()=>{
    const authService:AuthService=inject(AuthService);
    const route:Router=inject(Router);
    
    if(authService.getCookies()==="customer"){
        return true;
    }
    else{
        route.navigate(['auth','login'])
        return false;
    }
}