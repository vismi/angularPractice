import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import bootstrap from "bootstrap";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatExpansionModule,
  MatButtonModule
} from '@angular/material';


import { FlightListComponent } from './flight-list/flight-list.component';
import { SummaryComponent } from './summary/summary.component';
import { SearchBarComponent } from './search-bar/search-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    SummaryComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , FormsModule , HttpModule , HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
