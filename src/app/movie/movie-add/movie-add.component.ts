import { Film } from './../../shared/Models/film.model';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MovieService } from './../../shared/service/movie.service';
import { Movie } from './../../shared/Models/movie.model';
import { LanguageService } from './../../shared/service/language.service';
import { CaregoryService } from './../../shared/service/caregory.service';
import { Language } from './../../shared/Models/language.model';
import { Category } from './../../shared/Models/category.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Categorie } from 'src/app/shared/Models/categorie.model';
import { Langue } from 'src/app/shared/Models/langue.model';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent implements OnInit {

  public categories: Category[];
  public languages: Language[];
  public movie: Movie;
  public movieForm: FormGroup;
  public newArrayCate: Category[];

  constructor(
    private caregoryService: CaregoryService,
    private languageService: LanguageService,
    public movieService: MovieService,
    private formBuilder: FormBuilder
  ) { }

  OnClickAddMovie(): void{
    const formValue = this.movieForm.value;
    const newMovie: Movie = {} as Movie;
    newMovie.id = formValue.$id,
    newMovie.title = formValue.title,
    newMovie.description = formValue.description,
    newMovie.duration = formValue.duration,
    newMovie.releaseyear = formValue.releaseyear,
    newMovie.poster = formValue.poster,
    newMovie.category = formValue.idcategory;
    newMovie.language = formValue.idlanguage;
    console.log(formValue.idcategory.id);
    console.log(formValue.idcategory.name);
    // Test Classe Film
    const newFilm: Film = new Film(
      formValue.$id,
      formValue.title,
      formValue.description,
      formValue.duration,
      formValue.releaseyear,
      formValue.poster,
      new Categorie(formValue.idcategory.id, formValue.idcategory.name),
      new Langue(formValue.idlanguage.id, formValue.idlanguage.name)
    );


    this.movieService.onAddMovie(newFilm);
  }

  ngOnInit(): void {
    this.initForm();
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

  initForm(): void {
    this.movieForm = this.formBuilder.group({
    $id: new FormControl(null),
    title: new FormControl(''),
    description: new FormControl(''),
    duration: new FormControl(''),
    releaseyear: new FormControl(''),
    poster: new FormControl(''),
    idcategory: new FormControl(''),
    idlanguage: new FormControl('')
    });
}

}
