import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CanActivate } from '../guards/auth.guard';

const routes: Routes = [
  {path: '', component:EventsComponent,canActivate:[CanActivate]},
  {path:'create-event', component:CreateEventComponent,canActivate:[CanActivate]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
