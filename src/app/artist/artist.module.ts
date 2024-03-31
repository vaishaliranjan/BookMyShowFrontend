import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistsComponent } from './artists/artists.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { HeaderComponent } from '../header/header.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    ArtistsComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    TableModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    HeaderComponent,
    ToastModule
  ],
  providers:[
    DatePipe,
    MessageService
  ]
})
export class ArtistModule { }
