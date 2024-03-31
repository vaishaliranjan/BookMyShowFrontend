import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
  imports:[
    CommonModule,
    RouterLink
  ],
})
export class HeaderComponent {
  authService= inject(AuthService)
  router= inject(Router);
  isUserAuthenticated=this.authService.isAuthenticated();

  OnLogout(){
    this.authService.logout();
    this.router.navigate([""])
  }

  OnDashboardClick(){
    if(this.authService.getCookies()==='admin'){
      this.router.navigate(['admins',"dashboard"])
    }
    else if(this.authService.getCookies()==='organizer'){
      this.router.navigate(['organizers',"dashboard"])
    }
    else{
      this.router.navigate(['customers',"dashboard"])
    }
  }
}
