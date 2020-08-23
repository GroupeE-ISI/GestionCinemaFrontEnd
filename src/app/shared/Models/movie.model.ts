import { Langage } from './langage.model';
import { Categorie } from './categorie.model';
import { Screening } from './screening.model';
export interface Movie {
    id: number;
    titre: string;
    description: string;
    duree: string;
    anneeSortie: string;
    photo: string;
    // screening: Screening[];
    categorie: Categorie;
    langage: Langage;

    // constructor(

    //     idParam: number,
    //     titleParam: string,
    //     descriptionParam: string,
    //     durationParam: string,
    //     releaseYearParam: string,
    //     posterParam: string,
    //     // screeningParam: Screening[],
    //     categoryParam: Categorie,
    //     languageParam: Langage,
    // ) {
    //     this.id = idParam;
    //     this.titre = titleParam;
    //     this.description = descriptionParam;
    //     this.duree = durationParam;
    //     this.anneeSortie = releaseYearParam;
    //     this.photo = posterParam;
    //     // this.screening = screeningParam;
    //     this.categorie = categoryParam;
    //     this.langage = languageParam;
    // }
}
