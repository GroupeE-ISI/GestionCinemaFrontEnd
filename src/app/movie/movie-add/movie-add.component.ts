import { Movie } from './../../shared/Models/movie.model';
import { LanguageService } from './../../shared/service/language.service';
import { CaregoryService } from './../../shared/service/caregory.service';
import { Language } from './../../shared/Models/language.model';
import { Category } from './../../shared/Models/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent implements OnInit {

  public categories: Category[];
  public languages: Language[];
  public movie: Movie;

  constructor(
    private caregoryService: CaregoryService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.caregoryService.getCategories().subscribe(
      (dataCategories) => {
        this.categories = dataCategories;
      },
      (error) => {
        console.log(error);
      },
      () => console.log('Finished')
    );
    this.languageService.getLanguages().subscribe(
      (dataLanguages) => {
        this.languages = dataLanguages;
      },
      (error) => {
        console.log(error);
      },
      () => console.log('Finished')
    );
  }

}
