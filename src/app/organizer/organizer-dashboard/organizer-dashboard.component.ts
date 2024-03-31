import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organizer-dashboard',
  templateUrl: './organizer-dashboard.component.html',
  styleUrl: './organizer-dashboard.component.css'
})
export class OrganizerDashboardComponent {
  cards = [
    { title: "View All Events", imageUrl: "https://th.bing.com/th/id/OIP.uVUj-ngs-3tLXFXkhjqQ6QHaE8?w=1200&h=800&rs=1&pid=ImgDetMain" },
    { title: "Create An Event", imageUrl: "https://cdn-icons-png.flaticon.com/512/5497/5497249.png" }
  ];
  router=inject(Router);

  viewDetails(index: number) {
    switch (index) {
      case 0:
        this.router.navigate(['/events']);
        break;
      case 1:
        this.router.navigate(['/artists']);
        break;
      default:
        break;
    }
  }
}
