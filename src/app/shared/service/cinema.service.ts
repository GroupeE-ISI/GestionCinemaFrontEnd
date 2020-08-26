import { Cinema } from './../Models/cinema.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

    public recup = 'http://localhost:8080/cinema/';

    public cinemas: Cinema[];

    constructor(public http: HttpClient) { }

    public getCinemas(): Observable<Cinema[]>{
      return this.http.get<Cinema[]>(this.recup + 'lister');
    }

    // getCinemas(ville){
    //   return this.http.get(ville._links.cinemas.href);
    // }
    getSalles(cinema){
      return this.http.get(cinema._links.salles.href);

    }

    getSeances(salle:any){
     let url = salle._links.seances.href.replace("{?projection}","");
      return this.http.get(url+"?projection=p1");

    }
    getReservationsPlaces(seance){

      let url = seance._links.reservations.href.replace("{?projection}","");
      return this.http.get(url+"?projection=p2");
    }
    payerReservations(dform){
      return this.http.post(this.recup+"/payerReservations", dform);
    }

   }

