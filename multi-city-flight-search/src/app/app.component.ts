import { Component , OnInit } from '@angular/core';
import { AppService } from '../app/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
   providers:[AppService]
})
export class AppComponent implements OnInit {


 constructor() { }

  ngOnInit() {

  }

}
