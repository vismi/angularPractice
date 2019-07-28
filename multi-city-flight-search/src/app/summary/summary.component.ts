import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor() { }

  selectedJourneyItems: any;
  totalPrice = 0;
  ngOnInit() {
    if(history.state.data!=undefined){
      this.selectedJourneyItems = history.state.data;
      this.totalPrice = Math.round( this.selectedJourneyItems.reduce((a, b) => a + b.cabin.lowestJourneyPriceInCabin.amount,0) * 100 ) / 1000;
      console.log(this.totalPrice);

    }
  }

}
