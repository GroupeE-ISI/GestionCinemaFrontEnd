import { Movie } from './../Models/movie.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public baseURL = 'http://localhost:8080/flim/';

  constructor(private httpClient: HttpClient) { }

  public getMovies() {
    return this.httpClient.get<Movie[]>(this.baseURL + 'lister');
  }
}
