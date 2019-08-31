
import {Component, OnInit} from '@angular/core';
import {SearchBarService} from '../search-bar/search-bar.service';
import * as moment from 'moment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {Observable} from 'rxjs/Rx';
import { debounceTime, distinctUntilChanged, switchMap, catchError, filter, map, tap  } from 'rxjs/operators';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [SearchBarService]
})
export class SearchBarComponent implements OnInit {

  totalSegments = 1;
  segmentFlightSelectedFor = 0;
  ondSearchPayload: any = {'ondSearches': []};
  journeyMatrix: any = [];
  showFlightList = false;
  response: any = {};
  flightList: any = [];
  ondSearches: any;
  showLoadingImg: boolean = false;
  journeyData: any = [];
  userData: FormGroup;
  ticks: any;
  submitted = false;
  minDate: Date;
  maxDate: Date;
  typeAheadVar: any=[];

  constructor(private searchBarService: SearchBarService, private formBuilder: FormBuilder) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() );
    this.maxDate.setDate(this.maxDate.getDate() + 360);
  }

  ngOnInit() {

    this.userData = this.formBuilder.group({
      originLocationCode: ['', [Validators.required, Validators.minLength(3)]],
      destinationLocationCode: ['', [Validators.required, Validators.minLength(3)]],
      departureDate: ['', Validators.required]
    });

    this.journeyMatrix.push({
      'originLocationCode': '',
      'destinationLocationCode': '',
      'departureDate': moment().add(0, 'days').format('YYYY-MM-DD')
    });
  }


  onSubmit() {
    this.submitted = true;

    if (this.userData.invalid) {
      return;
    }
  }

  onSearchChange(searchValue: any): void {
  if(searchValue.length>2){
    console.log('searchValue',searchValue);
    this.searchBarService.getTypeAheadData(searchValue)
      .subscribe(
        data => {
          if(data.hasOwnProperty("locations")){
            var updatedTypeAheadVar = data['locations'].map((location)=>{
              return location.airportDetails.name+', '+
                location.cityDetails.name+', ('+
                location.airportDetails.iataCode+'), '+
                location.countryDetails.name;
            });
            this.typeAheadVar = updatedTypeAheadVar;
            console.log('this.typeAheadVar',this.typeAheadVar);
          }
        }
      );

  }
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      tap((term)=>this.onSearchChange(term)),
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : this.typeAheadVar.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  addSegment() {
    var lastDestination = this.journeyMatrix[this.journeyMatrix.length - 1].destinationLocationCode;
    var lastDate = this.journeyMatrix[this.journeyMatrix.length - 1].departureDate;

    if (this.totalSegments < 6) {
      this.journeyMatrix.push({
        'originLocationCode': lastDestination,
        'destinationLocationCode': '',
        'departureDate': moment(lastDate).add(7, 'days').format('YYYY-MM-DD')
      });
      this.totalSegments++;
    }
  }

  removeSegment(segmentIndex: any) {
    if (this.totalSegments > 1 && segmentIndex > 0) {
      this.journeyMatrix.splice(segmentIndex, 1)
      this.totalSegments--;
    }
  }

  getdata(data: any) {
    this.showLoadingImg = true;
    this.journeyData = [];

    this.ondSearchPayload.ondSearches = this.journeyMatrix.map((journeyItem)=>{
      return {'departureDate':journeyItem.departureDate,
      'destinationLocationCode':journeyItem.destinationLocationCode.split(',')[2].slice(2,5),
      'originLocationCode':journeyItem.originLocationCode.split(',')[2].slice(2,5)
    };
    });

console.log('  this.ondSearchPayload',   this.ondSearchPayload);
    let timer = Observable.timer(200000, 1000);
    this.searchBarService.deleteCache()
      .subscribe((resp) => {
        this.searchBarService.getSearchData(this.ondSearchPayload)
          .subscribe(
            data => {
              var response = data;
              this.showLoadingImg = false;
              this.showFlightList = true;
              this.journeyData.push({segmentData: response});
              document.getElementById('flight-list-outer').scrollIntoView();

              timer.subscribe(t => this.ticks = t);

            }, error => {
              this.showLoadingImg = false;
              console.log('error', error.error.errors[0].code);
              Swal.fire({
                title: error.error.errors[0].code,
                text: error.error.errors[0].reason == 'UNEXPECTED_TECHNICAL_EXCEPTION' ? 'Route not serviced. Search again' : 'not UNEXPECTED_TECHNICAL_EXCEPTION',
                type: 'error',
                confirmButtonText: 'Cool'
              })
            }
          );
      });
  }
}
