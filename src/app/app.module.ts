import { MovieComponent } from './movie/movie.component';
import { MovieService } from './shared/service/movie.service';
import { CinemaService } from './shared/service/cinema.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorpsAppliComponent } from './corps-appli/corps-appli.component';
import { CinemaBodyComponent } from './corps-appli/cinema-body/cinema-body.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CorpsAppliComponent,
    CinemaBodyComponent,
    MovieComponent,
    MovieDetailsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    CinemaService,
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
