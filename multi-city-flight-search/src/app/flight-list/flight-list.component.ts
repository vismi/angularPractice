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

  constructor(private appService:AppService) { }

  ngOnInit() {


  }

  callNextSegment(href: any){
     this.appService.getSearchDataForNextSegment(href,this.ondSearchPayload)
    .subscribe((response)=>{
      if(response!='No Offers'){
        this.journeyData.push({segmentData : response});
        console.log('responsee',this.journeyData)
      }
     });
  }
}
