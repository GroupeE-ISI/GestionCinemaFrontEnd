import { Movie } from './../Models/movie.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public baseURL = 'http://localhost:8080/film/';

  constructor(private httpClient: HttpClient) { }

  public getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.baseURL + 'lister');
  }

  public getMoviesByCategory(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.baseURL + 'filtrer');
}
}
