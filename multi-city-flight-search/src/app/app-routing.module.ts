import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SummaryComponent} from './summary/summary.component';
import {SearchBarComponent} from './search-bar/search-bar.component';


const routes: Routes = [
 { path: '', component: SearchBarComponent, pathMatch: 'full' },
 { path : 'summary' , component: SummaryComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
