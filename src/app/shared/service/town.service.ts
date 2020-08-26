import { HttpClient } from '@angular/common/http';
import { Town } from './../Models/town.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TownService {

  public recup = 'http://localhost:8080/ville/';

  constructor(public http: HttpClient) { }

  public getTowns(): Observable<Town[]>{
    return this.http.get<Town[]>(this.recup + 'lister');
  }
}
