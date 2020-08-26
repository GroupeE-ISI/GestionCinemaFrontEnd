import { Salle } from './salle.model';
import { Movie } from './movie.model';
export interface Screening {
    id: number;
    timetable: string;
    screeningDate: Date;
    movie: Movie;
    salle: Salle;
}
