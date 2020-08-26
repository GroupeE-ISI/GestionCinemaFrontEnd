import { Screening } from './../../shared/Models/screening.model';
import { SeanceService } from './../../shared/service/seance.service';
import { HallService } from './../../shared/service/hall.service';
import { Salle } from './../../shared/Models/salle.model';
import { Cinema } from './../../shared/Models/cinema.model';
import { TownService } from './../../shared/service/town.service';
import { Town } from './../../shared/Models/town.model';
import { CinemaService } from './../../shared/service/cinema.service';
import { Component, OnInit, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { mergeMap, groupBy, reduce } from 'rxjs/operators';


@Component({
  selector: 'app-cinema-body',
  templateUrl: './cinema-body.component.html',
  styleUrls: ['./cinema-body.component.scss']
})
export class CinemaBodyComponent implements OnInit {

  public villes: Town[];
  public cinemas: Cinema[];
  public cinemasSearch: Cinema[];
  public salles: Salle[];
  public salleSearch: Salle[];
  public seances: Screening[];
  public seancesSearch: Screening[];
  public seancesSearchByFilmID: Screening[];
  public places;
  public chaine: string;


  public clicVille;
  public clicCinema;
  public clicSeance;
  public selectedPlaces;

  constructor(
    public townService: TownService,
    public cinemaService: CinemaService,
    public hallService: HallService,
    public seanceService: SeanceService
    ) { }

  ngOnInit(): void {
    this.townService.getTowns().subscribe(data => {
      this.villes = data;
      console.log(this.villes);
    }, error => {
      console.error(error);
    });
    this.cinemaService.getCinemas().subscribe(dataCinema => {
      this.cinemas = dataCinema;
    }, error => {
      console.error(error);
    });
    this.hallService.getHalls().subscribe(dataHall => {
      this.salles = dataHall;
    }, error => {
      console.error(error);
    });
    this.seanceService.getSeances().subscribe(dataSeances => {
      this.seances = dataSeances;
    }, error => {
      console.error(error);
    });
  }

  onGetCinemas(ville: Town): void {
    this.cinemasSearch = this.cinemas.filter((cinema) => cinema.ville.id === ville.id);
  }

  onGetSalles(cinema: Cinema): void{
    this.salleSearch = this.salles.filter((salle) => salle.cinema.id === cinema.id);
  }

  onGetSeances(salle: Screening): void{
    this.seancesSearch = this.seances.filter((seance) => seance.salle.id === salle.id);
  }

  seancesCategoryFilm():void{

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
