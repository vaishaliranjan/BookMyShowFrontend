import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminsComponent } from './admins/admins.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { HeaderComponent } from '../header/header.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { StyleClassModule } from 'primeng/styleclass';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AdminsComponent,
    AdminDashboardComponent,
    AddUsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ButtonModule,
    DataViewModule,
    TagModule,
    CarouselModule,
    CardModule,
    InputTextModule,
    TableModule,
    HeaderComponent,
    RadioButtonModule,
    StyleClassModule,
    CheckboxModule,
    FormsModule,
    DropdownModule,
    FormsModule,
    MessagesModule,
    DialogModule,
    ToastModule
  ]
})
export class AdminModule { }
