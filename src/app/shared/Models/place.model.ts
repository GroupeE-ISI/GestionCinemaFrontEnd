import { Salle } from './salle.model';
export interface Place {
    id: number;
    placeNumber: number;
    salle: Salle;
}
