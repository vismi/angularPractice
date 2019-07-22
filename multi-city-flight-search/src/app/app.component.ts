import { Component , OnInit } from '@angular/core';
import { AppService } from '../app/app.service';
import * as moment from 'moment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
   providers:[AppService]
})
export class AppComponent implements OnInit {

totalSegments = 1;
segmentFlightSelectedFor = 0;
ondSearchPayload: any = { 'ondsearches': []};
journeyMatrix: Array<any> = [];
showFlightList = false;

title = "British Airways"

data : any ={};
ondwanted = 0;
response : any={};
flightList : any =[];
result :Array<any>=[];
ondsearches : any;
final : any={};
try : any;
journeyData : Array<any> =[];

 constructor(private appService:AppService) { }

  ngOnInit() {
    this.journeyMatrix.push({
      'origin': '',
      'destination': '',
      'date':moment().format('YYYY-MM-DD')
    });
  }

addSegment(){
  var lastDestination = this.journeyMatrix[this.journeyMatrix.length-1].destination;
  this.journeyMatrix.push({
    'origin': lastDestination,
    'destination': '',
    'date':moment().add(7, 'days').format('YYYY-MM-DD')
  });
  this.totalSegments++;
}

removeSegment(){
  if(this.totalSegments>1){
  this.totalSegments--;
  }
}

getdata(data : any){
  this.ondSearchPayload.ondsearches = this.journeyMatrix;
 this.appService.getSearchData(this.ondSearchPayload)
.subscribe((response)=>{
  if(response!='No Offers'){
    this.showFlightList = true;
    this.journeyData.push({segmentData : response});
  }
 });
}

}
