export class Screening {
    id: number;
    timetable: string;
    screeningDate: Date;
    idMovie: number;
    idHall: number;

    constructor(
        idParam?: number,
        timetableParam?: string,
        screeningDateParam?: Date,
        idMovieParam?: number,
        idHallParam?: number
    ) {
        this.id = idParam;
        this.timetable = timetableParam;
        this.screeningDate = screeningDateParam;
        this.idMovie = idMovieParam;
        this.idHall = idHallParam;
    }
}
