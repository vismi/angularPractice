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
ondSearchPayload: any = { 'ondsearches': []};
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
            origin: ['', Validators.required]
        });

    this.journeyMatrix.push({
    'origin':'',
    'destination': '',
    'date':moment().add(0, 'days').format('YYYY-MM-DD')
  });
  }


    onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }
        }


addSegment(){
  var lastDestination = this.journeyMatrix[this.journeyMatrix.length-1].destination;
  var lastDate = this.journeyMatrix[this.journeyMatrix.length-1].date;
  this.journeyMatrix.push({
    'origin': lastDestination,
    'destination': '',
    'date':moment(lastDate).add(7, 'days').format('YYYY-MM-DD')
  });
  this.totalSegments++;
}

removeSegment(segmentIndex:any){
  if(this.totalSegments>1 && segmentIndex>0){
    this.journeyMatrix.splice(segmentIndex,1)
    this.totalSegments--;
  }
}

getdata(data : any){
  this.journeyData =[];
  this.ondSearchPayload.ondsearches = this.journeyMatrix;
 this.searchBarService.getSearchData(this.ondSearchPayload)
.subscribe((response)=>{
console.log('---',response);
  if(response!='No Offers'){
    this.showFlightList = true;
    this.journeyData.push({segmentData : response});
  }
 });
}
}
