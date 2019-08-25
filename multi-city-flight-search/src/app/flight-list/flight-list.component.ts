import {Component, Input, OnInit} from '@angular/core';
import {SearchBarService} from '../../app/search-bar/search-bar.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss'],
  providers: [SearchBarService]
})
export class FlightListComponent implements OnInit {

  @Input() segment: any;
  @Input() segmentIndex: any;
  @Input() journeyData: any;
  @Input() ondSearchPayload: any;
  @Input() segmentFlightSelectedFor: any;

  selectedJourneyItems: any;

  constructor(private searchBarService: SearchBarService, private router: Router) {
  }

  ngOnInit() {
    this.selectedJourneyItems = [];


  }

  flightsSelected: any = [];


  callNextSegment(segmentIndex: any, flightIndex: any, cabinIndex: any) {
    var href = '';
    var selectionObject = {
      'cabin': {},
      'localFlightSegments': {},

    };

    selectionObject.cabin = this.journeyData[segmentIndex].segmentData[flightIndex].availableCabinsForOption[cabinIndex];
    selectionObject.localFlightSegments = this.journeyData[segmentIndex].segmentData[flightIndex].localFlightSegments[0];


    if (this.journeyData[segmentIndex].segmentData[flightIndex].availableCabinsForOption[cabinIndex].hasOwnProperty('nextFlightSegment')) {
      href = this.journeyData[segmentIndex].segmentData[flightIndex].availableCabinsForOption[cabinIndex].nextFlightSegment.link.href;
    }

    if (href != '') {
      this.searchBarService.getSearchDataForNextSegment(href, this.ondSearchPayload)
        .subscribe((response) => {

          if (segmentIndex + 1 < this.journeyData.length) {
            console.log('prev option changed');
            this.segmentFlightSelectedFor = segmentIndex;
            let timesToPop = this.journeyData.length;
            this.journeyData.splice(segmentIndex + 1);
            this.selectedJourneyItems.splice(segmentIndex);
          } else {
            console.log('normal');
            this.segmentFlightSelectedFor++;
          }
          this.journeyData.push({segmentData: response});
          this.selectedJourneyItems.push(selectionObject);
          let flightListElement = document.getElementById('segment' + segmentIndex);
          console.log('flightListElement', flightListElement);
          flightListElement.scrollIntoView({'behavior': 'smooth'});

        });
    } else if (this.journeyData.length == this.ondSearchPayload.ondSearches.length) {
      this.selectedJourneyItems.push(selectionObject);
      this.router.navigate(['/summary'], {state: {data: this.selectedJourneyItems}});

    }
  }

  sort(segmentIndex: any, sortParams: any) {
    var segmentData = this.journeyData[segmentIndex].segmentData;
    switch (sortParams) {
      case "duration": {
        segmentData.sort(function (a, b) {
          var x = a.localFlightSegments[0].duration.toLowerCase(), y = b.localFlightSegments[0].duration.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
        break;
      }
      case "departure": {
        segmentData.sort(function (a, b) {
          var x = a.localFlightSegments[0].departureDateTime.toLowerCase(),
            y = b.localFlightSegments[0].departureDateTime.toLowerCase();
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
