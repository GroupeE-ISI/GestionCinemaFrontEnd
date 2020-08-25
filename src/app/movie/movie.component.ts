import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieService } from './../shared/service/movie.service';
import { Movie } from './../shared/Models/movie.model';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  public movies: Movie[];
  constructor(private movieService: MovieService, public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(MovieDetailsComponent);
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      (data) => {this.movies = data,
        console.log('in');
      },
      (error) => {console.log(error);
      },
      () => console.log('Finished')
      );
  }

}
