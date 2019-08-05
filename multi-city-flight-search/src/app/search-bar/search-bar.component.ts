import { Component, OnInit } from '@angular/core';
import { SearchBarService } from '../search-bar/search-bar.service';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

const Swal = require('sweetalert2');
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
ondSearches : any;
journeyData : Array<any> =[];
 userData: FormGroup;
    submitted = false;

 constructor(private searchBarService:SearchBarService , private formBuilder:FormBuilder) { }

  ngOnInit() {

  this.userData = this.formBuilder.group({
            originLocationCode: ['',[Validators.required , Validators.minLength(3)]],
            destinationLocationCode: ['', [Validators.required , Validators.minLength(3)]],
            departureDate: ['', Validators.required]
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
  var lastDestination = this.journeyMatrix[this.journeyMatrix.length-1].destinationLocationCode;
  var lastDate = this.journeyMatrix[this.journeyMatrix.length-1].departureDate;

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


  
  this.searchBarService.deleteCache()
.subscribe((resp)=>{
  this.searchBarService.getSearchData(this.ondSearchPayload)
.subscribe(
	data =>{
		var response=data;

    this.showFlightList = true;
    this.journeyData.push({segmentData : response});
    document.getElementById('flight-list-outer').scrollIntoView();
	Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  type: 'error',
  confirmButtonText: 'Cool'
});
  
 },
	error=>{
  console.log('error',error);
 }
	);
 });
 
 
 
 
}
}
