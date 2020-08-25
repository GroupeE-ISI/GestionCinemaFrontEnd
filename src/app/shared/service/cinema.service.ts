import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

    public recup:string="http://localhost:8080"

  constructor(public http: HttpClient) { }

    public getVilles(){
      return this.http.get(this.recup+"/villes");
    }
    
    getCinemas(ville){
      return this.http.get(ville._links.cinemas.href);
    }
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

