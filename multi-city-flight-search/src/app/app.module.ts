import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import bootstrap from "bootstrap";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {
  MatExpansionModule,
  MatButtonModule
} from '@angular/material';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormatStringPipe } from './stringFormatPipe';


import { FlightListComponent } from './flight-list/flight-list.component';
import { SummaryComponent } from './summary/summary.component';
import { SearchBarComponent } from './search-bar/search-bar.component';




@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    SummaryComponent,
    SearchBarComponent,
	FormatStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , FormsModule ,ReactiveFormsModule, HttpModule , HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    TypeaheadModule.forRoot(),
    NgbModule,
    MDBBootstrapModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
