import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

 constructor(private http:Http) { }

    getSearchData(payload:any) {
      console.log(payload);
      let href="http://localhost:3003/badotcomadapter-paa/rs/v1/test;ondwanted=1;applicableoffers='khushboo'";
      href="https://test123vismi.free.beeceptor.com";
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
let options = new RequestOptions({ headers?: headers });
  	return this.http.post(href,payload,options)
  	.pipe(map((response: Response)=> {
      var responseJSON = response.json();
      if(responseJSON.message=='no offers for this route'){
        return 'No Offers';
      }else{
        return responseJSON;
      }
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
