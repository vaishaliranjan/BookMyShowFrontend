import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './artists/artists.component';
import { CanActivateArtist } from '../guards/artist.guard';

const routes: Routes = [
  {path:'', component:ArtistsComponent,canActivate:[CanActivateArtist]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
