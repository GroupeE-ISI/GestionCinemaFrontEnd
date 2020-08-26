import { HttpClient } from '@angular/common/http';
import { Salle } from './../Models/salle.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HallService {

  public recup = 'http://localhost:8080/salle/';

  constructor(public http: HttpClient) { }

  public getHalls(): Observable<Salle[]>{
    return this.http.get<Salle[]>(this.recup + 'lister');
  }
}
