import { Langue } from './langue.model';
import { Categorie } from './categorie.model';
export class Film {
    id: number;
    title: string;
    description: string;
    duration: string;
    releaseyear: string;
    poster: string;
    category: Categorie;
    language: Langue;

    constructor(
        idParam: number,
        titleParam: string,
        descriptionParam: string,
        durationParam: string,
        releaseyearParam: string,
        posterParam: string,
        categoryParam: Categorie,
        languageParam: Langue
    ) {
        this.id = idParam;
        this.title = titleParam;
        this.description = descriptionParam;
        this.duration = durationParam;
        this.releaseyear = releaseyearParam;
        this.poster = posterParam;
        this.category = categoryParam;
        this.language = languageParam;
    }
}
