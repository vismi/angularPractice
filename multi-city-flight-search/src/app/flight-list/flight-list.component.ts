import { Component, Input, OnInit } from '@angular/core';
import { SearchBarService } from '../../app/search-bar/search-bar.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss'],
   providers:[SearchBarService]
})
export class FlightListComponent implements OnInit {

  @Input() segment: any;
  @Input() segmentIndex: any;
  @Input() journeyData: any;
  @Input() ondSearchPayload: any;
  @Input() segmentFlightSelectedFor: any;

  constructor(private searchBarService:SearchBarService, private router:Router) { }

  ngOnInit() {


  }

  flightsSelected: Array<any> = [];



  callNextSegment(segmentIndex:any, flightIndex:any, cabinIndex:any){
     var href = '';
     if(this.journeyData[segmentIndex].segmentData[flightIndex].availableCabinsForOption[cabinIndex].nextFlightSegment.hasOwnProperty('link')){
       href = this.journeyData[segmentIndex].segmentData[flightIndex].availableCabinsForOption[cabinIndex].nextFlightSegment.link.href;
     }

     if(href!='' && this.journeyData.length!=this.ondSearchPayload.ondsearches.length){
    this.searchBarService.getSearchDataForNextSegment(href,this.ondSearchPayload)
    .subscribe((response)=>{
      if(response!='No Offers'){
        if(segmentIndex+1<this.journeyData.length){
          this.segmentFlightSelectedFor=segmentIndex;
          this.journeyData[segmentIndex].segmentData = response;
          for(var i =segmentIndex; i<this.journeyData.length;i++){
            this.journeyData.pop();
          }
        }else{
          this.segmentFlightSelectedFor++;
        }
        this.journeyData.push({segmentData : response});
      }
     });
   }else {
     this.router.navigate(['/summary']);
   }
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
