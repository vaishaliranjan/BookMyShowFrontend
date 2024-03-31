import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.css'
})
export class CustomerDashboardComponent {
  // cards=["View All Bookings", "Book Tickets"]
  cards = [
    { title: "View All Bookings", imageUrl: "https://th.bing.com/th/id/OIP.NNWnytO6VxWK0O18En9AWQHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain" },
    { title: "Book Tickets", imageUrl: "https://thumbs.dreamstime.com/b/ticket-office-people-composition-public-transport-isometric-view-stall-cashier-passengers-vector-illustration-201432194.jpg" }
  ];
  router=inject(Router);

  viewDetails(index: number) {
    switch (index) {
      case 0:
        this.router.navigate(['/bookings']);
        break;
      case 1:
        this.router.navigate(['/events']);
        break;
      default:
        break;
    }
  }
}
