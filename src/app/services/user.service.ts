import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class UserService{
    http:HttpClient=inject(HttpClient);

    getCustomers(){
        return this.http.get('https://localhost:44338/api/customers');     
    }
    getOrganizers(){
        return this.http.get('https://localhost:44338/api/organizers');     
    }
    getAdmins(){
        return this.http.get('https://localhost:44338/api/admins');     
    }

    delete(userId:string,users:string){
        return this.http.delete('https://localhost:44338/api/'+users+'/'+userId); 
    }
    
}