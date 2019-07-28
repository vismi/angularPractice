import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor() { }

  selectedJourneyItems: any;
  ngOnInit() {
    if(history.state.data!=undefined){
      this.selectedJourneyItems = history.state.data;
    }
  }

}
