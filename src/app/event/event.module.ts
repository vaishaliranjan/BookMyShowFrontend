import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventsComponent } from './events/events.component';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { CarouselModule } from 'primeng/carousel';
import { TableModule } from 'primeng/table';
import { CreateEventComponent } from './create-event/create-event.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '../header/header.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    EventsComponent,
    CreateEventComponent
    ],
  imports: [
    CommonModule,
    EventRoutingModule,
    ButtonModule,
    DataViewModule,
    TagModule,
    CarouselModule,
    CardModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    HeaderComponent,
    ToastModule
  ],
  providers:[
    MessageService
  ]
})
export class EventModule { }
