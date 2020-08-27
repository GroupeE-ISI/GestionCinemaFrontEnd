import { MovieService } from './../shared/service/movie.service';
import { Movie } from './../shared/Models/movie.model';
import { CaregoryService } from './../shared/service/caregory.service';
import { Category } from './../shared/Models/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  public categories: Category[];
  public listFilms: Movie[];
  public listFilmCategory: Movie[];
  public categoryChosen: Category;


  constructor(private movieService: MovieService, private categoryService: CaregoryService) { }

  onClickGetMoviesByCategory(category: Category): void{
    console.log(this.categoryChosen);
    console.log(this.listFilms);
    this.listFilmCategory = this.listFilms.filter((film) => film.category === this.categoryChosen);
    // this.movieService.getMoviesByCategory().subscribe(
    //   (dataCategory) => {this.listFilmCategory = dataCategory,
    //     console.log('bien');
    //   },
    //   (error) => {console.log(error);
    //   },
    //   () => console.log('Finished')
    //   );
  }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (dataCategories) => {this.categories = dataCategories;
      },
      (error) => {console.log(error);
      },
      () => console.log('Finished')
      );

    this.movieService.getMovies().subscribe(
        (dataMovies) => {this.listFilms = dataMovies;
        },
        (error) => {console.log(error);
        },
        () => console.log('Finished')
        );
        }

}
