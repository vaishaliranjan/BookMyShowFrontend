import { NgModule, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizerRoutingModule } from './organizer-routing.module';
import { OrganizersComponent } from './organizers/organizers.component';
import { UserService } from '../services/user.service';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { OrganizerDashboardComponent } from './organizer-dashboard/organizer-dashboard.component';
import { HeaderComponent } from '../header/header.component';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    OrganizersComponent,
    OrganizerDashboardComponent
  ],
  imports: [
    CommonModule,
    OrganizerRoutingModule,
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
export class OrganizerModule {
  
 }
