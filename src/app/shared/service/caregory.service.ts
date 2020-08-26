import { Movie } from './../Models/movie.model';
import { Observable } from 'rxjs';
import { Category } from './../Models/category.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaregoryService {


  public baseURLCategory = 'http://localhost:8080/category/';

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseURLCategory + 'list');
  }
}
