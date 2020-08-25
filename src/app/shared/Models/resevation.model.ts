import { Place } from './place.model';

export interface Town {
    id: number;
    clientName: string;
    reservationDate: Date;
    price: number;
    place: Place;
}
