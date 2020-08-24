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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

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
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    CinemaService,
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
