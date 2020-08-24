import { CinemaService } from './../../shared/service/cinema.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

@Component({
  selector: 'app-cinema-body',
  templateUrl: './cinema-body.component.html',
  styleUrls: ['./cinema-body.component.scss']
})
export class CinemaBodyComponent implements OnInit {

  public villes;
  public cinemas;
  public salles:any;
  public places;

  public clicVille;
  public clicCinema;
  public clicSeance:any;

  constructor(public cinemaService:CinemaService) { }

  ngOnInit() {
    this.cinemaService.getVilles().subscribe(data=>{
      this.villes = data;
    }, error => {
      console.error(error);
    });
  }

  onGetCinemas(v){
    this.clicVille = v;
    //this.clicCinema = undefined;
    this.salles = undefined ;
    this.cinemaService.getCinemas(v).subscribe(data => {
      this.cinemas = data;
    }, error => {
      console.error(error);
    })
  }

  onGetSalles(c): void{
    this.clicCinema = c;
    this.cinemaService.getSalles(c).subscribe(data => {
      this.salles = data;
      this.salles._embedded.salles.forEach(salle => {
        this.cinemaService.getSeances(salle).subscribe(dataSeance => {
          salle.seances = dataSeance;
        }, error => {
          console.error(error);
      });
     })
    }, error => {
      console.error(error);
    })
  }

  onGetReservationsPlaces(p){
    this.clicSeance = p;
    this.cinemaService.getReservationsPlaces(p)
      .subscribe(data => {
        this.clicSeance.reservations = data;
      } , error => { console.log(error);
      })
  }

}
