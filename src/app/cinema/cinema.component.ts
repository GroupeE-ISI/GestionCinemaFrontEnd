import { CinemaService } from './../shared/service/cinema.service';
import { Cinema } from './../shared/Models/cinema.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {

  public cinemas: Cinema[];

  constructor(private cinemaService: CinemaService) { }

  ngOnInit(): void {
    this.cinemaService.getCinema().subscribe(
      (data) => {this.cinemas = data,
       console.log('ici');
      },
      (error) => {console.log(error);
      },
      () => console.log('Finished')
    );
  }

}
