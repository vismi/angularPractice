import { Component , OnInit } from '@angular/core';
import { AppService } from '../app/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
   providers:[AppService]
})
export class AppComponent implements OnInit {

totalSegments = 1;
ondSearchPayload: any = { 'ondsearches': []};
journeyMatrix: Array<any> = [];

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
      'date':''
    });
  }

addSegment(){
  this.journeyMatrix.push({
    'origin': '',
    'destination': '',
    'date':''
  });
  this.totalSegments++;
}
getdata(data : any){
  this.ondSearchPayload.ondsearches = this.journeyMatrix;
 this.appService.getSearchData(this.ondSearchPayload)
.subscribe((response)=>{
  if(response!='No Offers'){
    this.flightList = response
    this.journeyData.push({segmentData : response});
    console.log('responsee',this.journeyData)
  }
 });
}

}
