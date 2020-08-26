import { MovieAddComponent } from './movie/movie-add/movie-add.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SearchComponent } from './search/search.component';
import { MovieComponent } from './movie/movie.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CinemaBodyComponent } from './corps-appli/cinema-body/cinema-body.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cinemas' },
  { path: 'movie', component: MovieComponent },
  { path: 'cinemas', component: CinemaBodyComponent },
  { path: 'search', component: SearchComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'addmovie', component: MovieAddComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
