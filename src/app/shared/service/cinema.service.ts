import { Cinema } from './../Models/cinema.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

    public recup = 'http://localhost:8080/cinema';

  constructor(public http: HttpClient) { }

    public getCinema(): Observable<Cinema[]> {
      return this.http.get<Cinema[]>(this.recup + '/lister');
    }

    // getCinemas(v){
    //   return this.http.get(v._links.cinemas.href);
    // }

    // getSalles(c){
    //   return this.http.get(c._links.salles.href);

    // }
    
    // getSeances(salle:any){
    //  let url = salle._links.seances.href.replace("{?projection}","");
    //   return this.http.get(url+"?projection=p1");

    // } 


   }

