import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorpsAppliComponent } from './corps-appli/corps-appli.component';
import { CinemaBodyComponent } from './corps-appli/cinema-body/cinema-body.component';
import { CinemaComponent } from './cinema/cinema.component';


@NgModule({
  declarations: [
    AppComponent,
    CorpsAppliComponent,
    CinemaBodyComponent,
    CinemaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
    
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
