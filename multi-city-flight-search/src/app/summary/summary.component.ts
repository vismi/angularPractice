import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor() { }

  journeyItemSelection: any;
  totalPrice = 0;
  ngOnInit() {
    if(history.state.data!=undefined){
      this.journeyItemSelection = history.state.data;
	  console.log(this.journeyItemSelection);
      this.totalPrice = Math.round( this.journeyItemSelection.reduce((a, b) => a + b.cabin.lowestJourneyPriceInCabin.amount,0) * 100 ) / 1000;
      console.log(this.totalPrice);
 
    }
  }

}
