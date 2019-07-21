import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import bootstrap from "bootstrap";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FlightListComponent } from './flight-list/flight-list.component';



@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , FormsModule , HttpModule , HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
