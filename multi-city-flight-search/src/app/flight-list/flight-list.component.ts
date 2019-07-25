import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../../app/app.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss'],
   providers:[AppService]
})
export class FlightListComponent implements OnInit {

  @Input() segment: any;
  @Input() segmentIndex: any;
  @Input() journeyData: any;
  @Input() ondSearchPayload: any;
  @Input() segmentFlightSelectedFor: any;

  constructor(private appService:AppService) { }

  ngOnInit() {


  }

  flightsSelected: Array<any> = [];
  callNextSegment(segmentIndex:any, flightIndex:any, cabinIndex:any){
     var href = this.journeyData[segmentIndex].segmentData[flightIndex].availableCabinsForOption[cabinIndex].nextFlightSegment.link.href;
     this.appService.getSearchDataForNextSegment(href,this.ondSearchPayload)
    .subscribe((response)=>{
      if(response!='No Offers'){console.log('response',response);
        if(segmentIndex<=this.segmentFlightSelectedFor){
          this.segmentFlightSelectedFor=segmentIndex;
          this.journeyData[segmentIndex].segmentData = response;
          for(var i =0; i<this.ondSearchPayload.ondsearches.length;i++){
            this.journeyData.pop();
          }
        }else{
          this.segmentFlightSelectedFor++;
          this.journeyData.push({segmentData : response});
        }

      }
     });
  }

  sort(segmentIndex:any, sortParams:any){
    var segmentData= this.journeyData[segmentIndex].segmentData;
    switch(sortParams) {
   case "duration": {
     segmentData.sort(function(a, b){
       var x = a.localFlightSegments[0].duration.toLowerCase(), y = b.localFlightSegments[0].duration.toLowerCase();
       return x < y ? -1 : x > y ? 1 : 0;
     });
      break;
   }
   case "departure": {
     segmentData.sort(function(a, b){
       var x = a.localFlightSegments[0].departureDateTime.toLowerCase(), y = b.localFlightSegments[0].departureDateTime.toLowerCase();
       return x < y ? -1 : x > y ? 1 : 0;
     });
      break;
   }
   default: {
      console.log("Invalid choice");
      break;
   }
}

  }
}
