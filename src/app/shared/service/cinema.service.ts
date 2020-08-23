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

    getCinemas(v){
      return this.http.get(v._links.cinemas.href);
    }
    getSalles(c){
      return this.http.get(c._links.salles.href);

    }
    
    getSeances(salle:any){
     let url = salle._links.seances.href.replace("{?projection}","");
      return this.http.get(url+"?projection=p1");

    }

   }

