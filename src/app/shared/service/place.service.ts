import { Place } from './../Models/place.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  public baseURL = 'http://localhost:8080/place/';

  constructor(private httpClient: HttpClient) { }

  public getPlaces(): Observable<Place[]> {
    return this.httpClient.get<Place[]>(this.baseURL + 'lister');
  }
}
