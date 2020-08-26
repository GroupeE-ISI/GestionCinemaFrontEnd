import { Movie } from './../Models/movie.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from "@angular/forms"
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public baseURL = 'http://localhost:8080/film/';

  constructor(private httpClient: HttpClient) { }

  form: FormGroup = new FormGroup({
    $id: new FormControl(null),
    title: new FormControl(''),
    description: new FormControl(''),
    duration: new FormControl(''),
    releaseyear: new FormControl(''),
    poster: new FormControl(''),
    category: new FormControl(''),
    language: new FormControl('')
  });

  public getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.baseURL + 'lister');
  }

  public getMoviesByCategory(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.baseURL + 'filtrer');
}
}
