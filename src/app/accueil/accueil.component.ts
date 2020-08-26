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
  public listFilmCategory: Movie[];
  public categoryChosen: Category;


  constructor(private movieService: MovieService, private categoryService: CaregoryService) { }

  onClickGetMoviesByCategory(category: Category): void{
    this.movieService.getMoviesByCategory().subscribe(
      (dataCategory) => {this.listFilmCategory = dataCategory,
        console.log('bien');
      },
      (error) => {console.log(error);
      },
      () => console.log('Finished')
      );
  }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (dataCategories) => {this.categories = dataCategories,
        console.log('in');
      },
      (error) => {console.log(error);
      },
      () => console.log('Finished')
      );
  }

}
