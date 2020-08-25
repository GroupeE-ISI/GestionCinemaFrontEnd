import { SearchComponent } from './search/search.component';
import { MovieComponent } from './movie/movie.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CinemaBodyComponent } from './corps-appli/cinema-body/cinema-body.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cinemas' },
  { path: 'movie', component: MovieComponent },
  { path: 'cinemas', component: CinemaBodyComponent },
  { path: 'search', component: SearchComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
