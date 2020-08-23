import { MovieComponent } from './movie/movie.component';
import { MovieService } from './shared/service/movie.service';
import { CinemaService } from './shared/service/cinema.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorpsAppliComponent } from './corps-appli/corps-appli.component';
import { CinemaBodyComponent } from './corps-appli/cinema-body/cinema-body.component';


@NgModule({
  declarations: [
    AppComponent,
    CorpsAppliComponent,
    CinemaBodyComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClient
  ],
  providers: [
    CinemaService,
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
