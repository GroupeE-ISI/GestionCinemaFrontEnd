import { MovieService } from './../shared/service/movie.service';
import { Movie } from './../shared/Models/movie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  public movies: Movie[];
  constructor(private movieService: MovieService) { }

  openDialog(){}

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
