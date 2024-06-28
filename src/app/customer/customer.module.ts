import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CustomersComponent } from './customers/customers.component';
import { TableModule } from 'primeng/table';
import { HeaderComponent } from '../header/header.component';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    CustomerDashboardComponent,
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ButtonModule,
    DataViewModule,
    RatingModule,
    TagModule,
    CarouselModule,
    CardModule,
    InputTextModule,
    TableModule,
    HeaderComponent,
    DialogModule,
    ToastModule
  ]
})
export class CustomerModule { }
