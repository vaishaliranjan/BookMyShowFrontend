import { Component, OnInit, inject } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  customers:any;
  customerService= inject(UserService);
  showDeleteDialog:boolean=false;
  customerId:string;
  ngOnInit(): void {
    this.loadCustomers();
  }
  loadCustomers(){
    this.customerService.getCustomers().subscribe((customers)=>{
      this.customers = customers;
      console.log(customers)
    })
  }

  OnDeleteCustomer(userId:string){
    this.customerId=userId;
    this.showDeleteDialog=true;
  }

  DeleteCustomer(){
    this.customerService.delete(this.customerId,"customers").subscribe(()=>{
      this.loadCustomers();
      console.log("Customer Delete Successfully")
      this.showDeleteDialog=false;
    })
  }

  CancelDeleteCustomer(){
    this.showDeleteDialog=false;
  }
}
