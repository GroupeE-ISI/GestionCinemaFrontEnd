import { Movie } from './../shared/Models/movie.model';
import { MovieService } from './../shared/service/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private listMoviesBase: Movie[];
  public listMoviesSearch: Movie[];
  public searchMovie: string;

  constructor(private movieService: MovieService) { }

  handleSearchIntoMoviess(): void{
    if (this.searchMovie) {
      this.listMoviesSearch = this.listMoviesBase.filter((movie) => movie.title.toUpperCase().includes(this.searchMovie.toUpperCase()));
    }else{
      this.listMoviesSearch = this.listMoviesBase;
    }
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      (dataMovies) => {this.listMoviesBase = dataMovies,
        this.listMoviesSearch = dataMovies;
      },
      (error) => {console.log(error);
      },
      () => console.log('Finished')
      );
  }
}
