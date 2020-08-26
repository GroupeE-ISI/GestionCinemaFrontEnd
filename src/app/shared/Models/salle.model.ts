import { Cinema } from './cinema.model';
export interface Salle {
    id: number;
    nom: string;
    capacite: number;
    cinema: Cinema;
}
