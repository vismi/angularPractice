import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

 constructor(private http:Http) { }

    getSearchData(payload:any) {
      let href = "http://caws08-e2e01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=1";
      href = "http://localhost:3000/badotcomadapter-paa/rs/v1/test;ondwanted=1";
let headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8',
'Access-Control-Allow-Method':'*',
'Access-Control-Allow-Headers':'*',
'ba_client_applicationName' : 'test'});
let options =  { headers: headers };
  	return this.http.post(href,payload,options)
  	.pipe(map((response: Response)=> {
        return response;
  	}));
  }
  getSearchDataForNextSegment(href:any, payload:any) {
  var re = /caws08-pint01.baplc.com/gi;
  href = href.replace(re, "localhost:3003");
  return this.http.post(href,payload)
  .pipe(map((response: Response)=> {
    var responseJSON = response.json();
    if(responseJSON.message=='no offers for this route'){
      return 'No Offers';
    }else{
      return responseJSON;
    }
  }));
  }
}
