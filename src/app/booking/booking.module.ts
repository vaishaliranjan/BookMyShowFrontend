import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingsComponent } from './bookings/bookings.component';
import { TableModule } from 'primeng/table';
import { HeaderComponent } from '../header/header.component';


@NgModule({
  declarations: [
    BookingsComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ButtonModule,
    DataViewModule,
    TagModule,
    CarouselModule,
    CardModule,
    InputTextModule,
    TableModule,
    HeaderComponent
  ]
})
export class BookingModule { }
