import { CinemaService } from './../../shared/service/cinema.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cinema-body',
  templateUrl: './cinema-body.component.html',
  styleUrls: ['./cinema-body.component.scss']
})
export class CinemaBodyComponent implements OnInit {

  public villes;
  public cinemas;
  public salles;
  public places;

  public clicVille;
  public clicCinema;
  public clicSeance;

  constructor(public cinemaService: CinemaService) { }

  ngOnInit(): void {
    this.cinemaService.getVilles().subscribe(data => {
      this.villes = data;
    }, error => {
      console.error(error);
    });
  }

  onGetCinemas(v): void {
    this.clicVille = v;
    //this.clicCinema = undefined;
    this.salles = undefined ;
    this.cinemaService.getCinemas(v).subscribe(dataCinema => {
      this.cinemas = dataCinema;
    }, error => {
      console.error(error);
    });
  }

  onGetSalles(c): void{
    this.clicCinema = c;
    //this.places = undefined ;
    this.cinemaService.getSalles(c).subscribe(data => {
      this.salles = data;
      this.salles._embedded.salles.forEach(salle => {
        this.cinemaService.getSeances(salle).subscribe( dataSeance => {
          salle.seances = dataSeance;
        }, error => {
          console.error(error);
      });
     });
    }, error => {
      console.error(error);
    });
  }

  onGetReservationsPlaces(p): void{
    this.clicSeance = p;
    this.clicCinema = undefined ;
    this.cinemaService.getReservationsPlaces(p)
      .subscribe(dataReservation => {
        this.clicSeance.reservations = dataReservation;
      } , error => { console.log(error);
      });
  }
}