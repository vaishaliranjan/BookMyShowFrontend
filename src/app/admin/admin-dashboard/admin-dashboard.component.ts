import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  // cards=["View All Admins", "View All Customers", "View All Organizers","View All Artists","View All Venues", "View All Bookings", "View All Events", "Add New User"]
  cards = [
    { title: "View All Admins", imageUrl: "https://static.vecteezy.com/system/resources/previews/011/431/911/large_2x/system-administrators-or-sysadmins-are-servicing-server-racks-system-administration-upkeeping-configuration-of-computer-systems-and-networks-concept-flat-modern-illustration-vector.jpg" },
    { title: "View All Customers", imageUrl: "https://th.bing.com/th/id/OIP.l5ULUO3bja2GG-HjaDPKMAAAAA?w=400&h=300&rs=1&pid=ImgDetMain" },
    { title: "View All Organizers", imageUrl: "https://thewodm.com/wp-content/uploads/2023/06/organizing-an-event_thewodm.jpg" },
    { title: "View All Artists", imageUrl: "https://st3.depositphotos.com/30046358/33261/v/450/depositphotos_332618542-stock-illustration-rock-band-singer-flat-color.jpg" },
    { title: "View All Venues", imageUrl: "https://static.vecteezy.com/system/resources/previews/001/265/731/original/map-with-location-pin-vector.jpg" },
    { title: "View All Bookings", imageUrl: "https://th.bing.com/th/id/OIP.NNWnytO6VxWK0O18En9AWQHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain" },
    { title: "View All Events", imageUrl: "https://th.bing.com/th/id/OIP.uVUj-ngs-3tLXFXkhjqQ6QHaE8?w=1200&h=800&rs=1&pid=ImgDetMain" },
    { title: "Add New User", imageUrl: "https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/f46942e0-38d9-4d15-b330-165c5efea5e6/test1-clientside/Hirer_1.png" },
  ];
  router=inject(Router);

  viewDetails(index: number) {
    switch (index) {
      case 0:
        this.router.navigate(['/admins']);
        break;
      case 1:
        this.router.navigate(['/customers']);
        break;
      case 2:
        this.router.navigate(['/organizers']);
        break;
      case 3:
        this.router.navigate(['/artists']);
        break;
      case 4:
        this.router.navigate(['/venues']);
        break;
      case 5:
        this.router.navigate(['/bookings']);
        break;
      case 6:
        this.router.navigate(['/events']);
        break;
      case 7:
        this.router.navigate(['/admins/add-user']);
        break;
      default:
        break;
    }
  }
}
