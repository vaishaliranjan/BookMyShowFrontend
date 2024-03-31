import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  authService=inject(AuthService);
}
