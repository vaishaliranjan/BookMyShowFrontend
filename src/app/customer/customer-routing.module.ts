import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { CanActivateCustomer } from '../guards/customer.guard';
import { CanActivateAdmin } from '../guards/admin.guard';


const routes: Routes = [
  {path:'', component:CustomersComponent,canActivate:[CanActivateAdmin]},
  {path: 'dashboard', component:CustomerDashboardComponent,canActivate:[CanActivateCustomer]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
