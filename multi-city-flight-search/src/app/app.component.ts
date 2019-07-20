import { Component , OnInit } from '@angular/core';
import { AppService } from '../app/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
   providers:[AppService]
})
export class AppComponent implements OnInit {

title = "British Airways"

data : any ={};
ondwanted = 0;
response : any={};
flightList : any =[];
result :Array<any>=[];
ondsearches : any;
final : any={};
try : any;


 constructor(private appService:AppService) { }

  ngOnInit() {

  }

getdata(data : any){
this.result.push(data);
this.final = { ondsearches : this.result}
console.log('data-----',JSON.stringify(this.final));
 this.appService.getSearchData(this.final)
.subscribe((response)=>{ this.flightList = response

//this.getFlightList(this.flightList);

 });

 
  }

getFlightList(flightList){
	console.log('heloooooooooooo',flightList[0].localFlightSegments[0].departureAirport.name);
}

}
