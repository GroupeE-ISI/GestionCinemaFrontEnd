import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../Models/language.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public recup = 'http://localhost:8080/language/';

  constructor(public http: HttpClient) { }

  public getLanguages(): Observable<Language[]>{
    return this.http.get<Language[]>(this.recup + 'list');
  }
}
