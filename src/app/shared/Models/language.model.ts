export class Language {
    id: number;
    name: string;

    constructor(
        idParam?: number,
        nameParam?: string
    ) {
        this.id = idParam;
        this.name = nameParam;
    }
}
