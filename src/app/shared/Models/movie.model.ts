import { Language } from './language.model';
import { Category } from './category.model';
import { Screening } from './screening.model';
export interface Movie {
    id: undefined;
    title: string;
    description: string;
    duration: string;
    releaseyear: string;
    poster: string;
    // screening: Screening[];
    category: Category;
    language: Language;
}
