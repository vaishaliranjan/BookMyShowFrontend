import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {} from "primeng/"
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {StyleClassModule} from 'primeng/styleclass';
import {CheckboxModule} from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    StyleClassModule,
    CheckboxModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    DropdownModule,
    MessagesModule
  ]
})
export class AuthenticationModule { }
