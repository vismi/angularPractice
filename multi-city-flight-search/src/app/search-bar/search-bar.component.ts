import {Component, OnInit} from '@angular/core';
import {SearchBarService} from '../search-bar/search-bar.service';
import * as moment from 'moment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {Observable} from 'rxjs/Rx';
import { debounceTime, distinctUntilChanged, switchMap, catchError  } from 'rxjs/operators';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';


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

  constructor(private searchBarService: SearchBarService, private formBuilder: FormBuilder) {
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

  onSearchChange(searchValue: string, searchTarget: any): void {
  if(searchValue.length>2){
    var typeAheadResult = {};
    //this.searchBarService.getTypeAheadData(searchValue)
    //  .subscribe(
    //    data => {
    //      console.log('data', data);
    //    }
    //  );
    typeAheadResult = {"locations":[{"locationType":"AIRPORT","airportDetails":{"iataCode":"CEK","name":"Chelyabinsk"},"cityDetails":{"code":"CEK","name":"Chelyabinsk"},"countryDetails":{"code":"RU","name":"Russia"},"availableProducts":{"flightOnly":true,"flightAndHotel":false,"flightAndCar":false,"hotelOnly":false,"carOnly":false}},{"locationType":"AIRPORT","airportDetails":{"iataCode":"CTU","name":"Chengdu"},"cityDetails":{"code":"CTU","name":"Chengdu"},"countryDetails":{"code":"CN","name":"China"},"availableProducts":{"flightOnly":true,"flightAndHotel":false,"flightAndCar":false,"hotelOnly":false,"carOnly":false}},{"locationType":"AIRPORT","airportDetails":{"iataCode":"MAA","name":"Chennai","bahID":"AIR_MAA_IN"},"cityDetails":{"code":"MAA","name":"Chennai","bahID":"CITY_MAA_IN"},"countryDetails":{"code":"IN","name":"India"},"availableProducts":{"flightOnly":true,"flightAndHotel":true,"flightAndCar":true,"hotelOnly":true,"carOnly":true}},{"locationType":"AIRPORT","airportDetails":{"iataCode":"CTM","name":"Chetumal"},"cityDetails":{"code":"CTM","name":"Chetumal"},"countryDetails":{"code":"MX","name":"Mexico"},"availableProducts":{"flightOnly":true,"flightAndHotel":false,"flightAndCar":false,"hotelOnly":false,"carOnly":false}}]};
    console.log('searchTarget', searchTarget);
  }
  }

    typeAheadResult = {"locations":[{"locationType":"AIRPORT","airportDetails":{"iataCode":"CEK","name":"Chelyabinsk"},"cityDetails":{"code":"CEK","name":"Chelyabinsk"},"countryDetails":{"code":"RU","name":"Russia"},"availableProducts":{"flightOnly":true,"flightAndHotel":false,"flightAndCar":false,"hotelOnly":false,"carOnly":false}},{"locationType":"AIRPORT","airportDetails":{"iataCode":"CTU","name":"Chengdu"},"cityDetails":{"code":"CTU","name":"Chengdu"},"countryDetails":{"code":"CN","name":"China"},"availableProducts":{"flightOnly":true,"flightAndHotel":false,"flightAndCar":false,"hotelOnly":false,"carOnly":false}},{"locationType":"AIRPORT","airportDetails":{"iataCode":"MAA","name":"Chennai","bahID":"AIR_MAA_IN"},"cityDetails":{"code":"MAA","name":"Chennai","bahID":"CITY_MAA_IN"},"countryDetails":{"code":"IN","name":"India"},"availableProducts":{"flightOnly":true,"flightAndHotel":true,"flightAndCar":true,"hotelOnly":true,"carOnly":true}},{"locationType":"AIRPORT","airportDetails":{"iataCode":"CTM","name":"Chetumal"},"cityDetails":{"code":"CTM","name":"Chetumal"},"countryDetails":{"code":"MX","name":"Mexico"},"availableProducts":{"flightOnly":true,"flightAndHotel":false,"flightAndCar":false,"hotelOnly":false,"carOnly":false}}]};


      search = (text$: Observable<string>) =>
      text$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term =>
          this.searchBarService.getTypeAheadData(term).pipe(
            catchError(() => {
              return 'of([])';
            }))
        )
      )

      resultFormatBandListValue(value: any) {
      return 'vismita';//value.name;
    }
    inputFormatBandListValue(value: any)   {
  if(value.name)
    return  'vismita2'; //value.name
  return 'vismita3';//value;
}

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
    this.ondSearchPayload.ondSearches = this.journeyMatrix;


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
