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

  constructor(
    private caregoryService: CaregoryService,
    private languageService: LanguageService,
    public movieService: MovieService,
    private formBuilder: FormBuilder
  ) { }

  OnClickAddMovie(): void{
    // console.log('in');
    // console.log(this.movieForm.value.category);
    const formValue = this.movieForm.value;
    // console.log(formValue);
    const newMovie: Movie = {} as Movie;
    newMovie.id = formValue.$id,
    newMovie.title = formValue.title,
    newMovie.description = formValue.description,
    newMovie.duration = formValue.duration,
    newMovie.releaseyear = formValue.releaseyear,
    newMovie.poster = formValue.poster,
    newMovie.category = this.categories.filter((category) => category.id === formValue.idcategory)[0];
    // newMovie.category.id = formValue.idcategory,
    // newMovie.language.id = formValue.idlanguage,
    newMovie.language = this.languages.filter((langue) => langue.id === formValue.idlanguage)[0];
    this.movieService.onAddMovie(newMovie);
    console.log(newMovie);
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
    namecategory: new FormControl(''),
    idlanguage: new FormControl(''),
    namelanguage: new FormControl('')
    });
}

}
