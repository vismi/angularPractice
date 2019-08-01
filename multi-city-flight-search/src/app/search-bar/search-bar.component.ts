import { Component, OnInit } from '@angular/core';
import { SearchBarService } from '../search-bar/search-bar.service';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
   providers:[SearchBarService]
})
export class SearchBarComponent implements OnInit {

totalSegments = 1;
segmentFlightSelectedFor = 0;
ondSearchPayload: any = { 'ondSearches': []};
journeyMatrix: Array<any> = [];
showFlightList = false;
response : any={};
flightList : any =[];
ondsearches : any;
journeyData : Array<any> =[];
 userData: FormGroup;
    submitted = false;

 constructor(private searchBarService:SearchBarService , private formBuilder:FormBuilder) { }

  ngOnInit() {

  this.userData = this.formBuilder.group({
            origin: ['',[Validators.required , Validators.minLength(3)]],
            destination: ['', [Validators.required , Validators.minLength(3)]],
            date: ['', Validators.required]
        });

    this.journeyMatrix.push({
    'originLocationCode':'',
    'destinationLocationCode': '',
    'departureDate':moment().add(0, 'days').format('YYYY-MM-DD')
  });
  }


    onSubmit() {
        this.submitted = true;

        if (this.userData.invalid) {
            return;
        }
        }


addSegment(){
  var lastDestination = this.journeyMatrix[this.journeyMatrix.length-1].destination;
  var lastDate = this.journeyMatrix[this.journeyMatrix.length-1].date;
if(this.totalSegments<6){  this.journeyMatrix.push({
    'originLocationCode': lastDestination,
    'destinationLocationCode': '',
    'departureDate':moment(lastDate).add(7, 'days').format('YYYY-MM-DD')
  });
  this.totalSegments++;}
}

removeSegment(segmentIndex:any){
  if(this.totalSegments>1 && segmentIndex>0){
    this.journeyMatrix.splice(segmentIndex,1)
    this.totalSegments--;
  }
}

getdata(data : any){
  this.journeyData =[];
  this.ondSearchPayload.ondSearches = this.journeyMatrix;
 this.searchBarService.getSearchData(this.ondSearchPayload)
.subscribe((response)=>{
console.log('---',response);
  if(response!='No Offers'){
    this.showFlightList = true;
    this.journeyData.push({segmentData : response});
    let flightListElement = document.getElementById('flight-list-outer');
    console.log('flightListElement',flightListElement);
    flightListElement.scrollIntoView();
  }
 });
}
}
