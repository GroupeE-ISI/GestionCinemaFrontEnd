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

  public clicVille;
  public clicCinema;

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
    this.cinemaService.getCinemas(v).subscribe(data => {
      this.cinemas = data;
    }, error => {
      console.error(error);
    })
  }

  onGetSalles(c){
    this.clicCinema = c;
    this.cinemaService.getSalles(c).subscribe(data => {
      this.salles = data;
      this.salles._embedded.salles.forEach(salle => {
        this.cinemaService.getSeances(salle).subscribe( data => {
          salle.seances = data;
        }, error => {
          console.error(error);
      });
     });
    }, error => {
      console.error(error);
    });
  }

}