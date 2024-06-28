import { Component, OnInit, inject } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { UserService } from '../../services/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
  providers:[
    MessageService
  ]
})
export class CustomersComponent implements OnInit {
  customers:any;
  customerService= inject(UserService);
  showDeleteDialog:boolean=false;
  customerId:string;
  constructor(private messageService: MessageService) { }
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
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Customer deleted successfully!!',
      });
    })
  }

  CancelDeleteCustomer(){
    this.showDeleteDialog=false;
  }
}
