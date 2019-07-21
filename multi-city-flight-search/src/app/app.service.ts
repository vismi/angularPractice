import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http:Http) { }

    getSearchData(payload:any) {
      console.log(payload);
  	return this.http.post("http://localhost:3003/badotcomadapter-paa/rs/v1/test;ondwanted=1;applicableoffers='khushboo'",payload)
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
