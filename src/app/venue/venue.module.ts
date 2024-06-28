import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { VenueRoutingModule } from './venue-routing.module';
import { VenuesComponent } from './venues/venues.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { HeaderComponent } from '../header/header.component';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    VenuesComponent
  ],
  imports: [
    CommonModule,
    VenueRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    InputTextModule,
    HeaderComponent,
    MessagesModule,
    ToastModule
  ],
  providers:[
    MessageService
  ]
})
export class VenueModule { }
