import { Screening } from './../Models/screening.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  public recup = 'http://localhost:8080/seance/';

  constructor(public http: HttpClient) { }

  public getSeances(): Observable<Screening[]>{
    return this.http.get<Screening[]>(this.recup + 'seances');
  }
}
