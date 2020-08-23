import { Language } from './language.model';
import { Category } from './category.model';
import { Screening } from './screening.model';
export class Movie {
    id: number;
    title: string;
    description: string;
    duration: string;
    releaseYear: string;
    poster: string;
    screening: Screening[];
    category: Category;
    language: Language;

    constructor(

        idParam: number,
        titleParam: string,
        descriptionParam: string,
        durationParam: string,
        releaseYearParam: string,
        posterParam: string,
        screeningParam: Screening[],
        categoryParam: Category,
        languageParam: Language,
    ) {
        this.id = idParam;
        this.title = titleParam;
        this.description = descriptionParam;
        this.duration = durationParam;
        this.releaseYear = releaseYearParam;
        this.poster = posterParam;
        this.screening = screeningParam;
        this.category = categoryParam;
        this.language = languageParam;
    }
}
