import { Component , OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

data : any ={};
  constructor() { }

  ngOnInit() {
  }

getdata(data : any){
console.log('abc', data);
  }
}
