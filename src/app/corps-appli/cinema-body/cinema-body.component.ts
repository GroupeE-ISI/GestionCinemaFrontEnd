import { Town } from './../../shared/Models/town.model';
import { CinemaService } from './../../shared/service/cinema.service';
import { Component, OnInit, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cinema-body',
  templateUrl: './cinema-body.component.html',
  styleUrls: ['./cinema-body.component.scss']
})
export class CinemaBodyComponent implements OnInit {

  public villes: Town[];
  public cinemas;
  public salles;
  public places;
  public chaine: string;


  public clicVille;
  public clicCinema;
  public clicSeance;
  public selectedPlaces;

  constructor(public cinemaService: CinemaService) { }

  ngOnInit(): void {
    this.cinemaService.getVilles().subscribe(data => {
      this.villes = data;
    }, error => {
      console.error(error);
    });
  }

  onGetCinemas(ville): void {
    this.clicVille = ville;
    //this.clicCinema = undefined;
    this.salles = undefined ;
    this.cinemaService.getCinemas(ville).subscribe(dataCinema => {
      this.cinemas = dataCinema;
    }, error => {
      console.error(error);
    });
  }

  onGetSalles(cinema): void{
    this.clicCinema = cinema;
    //this.places = undefined ;
    this.cinemaService.getSalles(cinema).subscribe(data => {
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

  onGetReservationsPlaces(seance): void{
    this.clicSeance = seance;
    this.clicCinema = undefined ;
    this.cinemaService.getReservationsPlaces(seance)
      .subscribe(dataReservation => {
        this.clicSeance.reservations = dataReservation;
        this.selectedPlaces = [];
      } , error => { console.log(error);
      });
  }

  onSelectedPlace(reservatio): void{
    if(!reservatio.selected){
      reservatio.selected = true;
      this.selectedPlaces.push(reservatio);
    }
    else {
      reservatio.selected = false;
      this.selectedPlaces.splice(this.selectedPlaces.indexOf(reservatio), 1);
    }
    console.log(this.selectedPlaces);
  }

  onGetPlaceButton(reservatio): string{
    let chaine = 'btn ticket ';
    if (reservatio.placeReservee === true){
      chaine = 'chaine + btn-danger';
    }
    else if (reservatio.selected){
      chaine = 'chaine + btn-warning';
    }
    else {
      chaine = 'chaine + btn-success';
    }
    return chaine;

  }

  onReserverPlaces(dform): void{
    let reservations = [];
    this.selectedPlaces.forEach(reservatio => {
      reservations.push(reservatio.id);
    });
    dform.reservations = reservations;
    this.cinemaService.payerReservations(dform).subscribe(dataReservation => {
      alert("Réservation ok !")
    }, error => {
      console.log(error);
    })
  }


}
