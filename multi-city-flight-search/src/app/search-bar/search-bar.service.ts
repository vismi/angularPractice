import { Injectable } from '@angular/core';
import {Http, Response,RequestOptions, Headers} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { HttpClient , HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

 constructor(private http:HttpClient) { }

 getTypeAheadData(searchString: string){
   let headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8',
                   'Access-Control-Allow-Method':'*',
                   'Access-Control-Allow-Headers':'*',
                   'ba_client_applicationName' : 'test'});
  let options =  { headers: headers };
   let url = "http://caws07-e2e01.baplc.com/csdm-plm/rs/v1/productlocations;searchText="+searchString+"?locale=en_GB";
//url = "http://localhost:3003/csdm-plm/rs/v1/productlocations;searchText="+searchString;
   return this.http.get(url,options)
   .pipe(map((response: Response)=> {
     return response;
   }));
 }

    getSearchData(payload:any) {
console.log('payload', payload);
	let headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8',
									'Access-Control-Allow-Method':'*',
									'Access-Control-Allow-Headers':'*',
									'ba_client_applicationName' : 'test'});
let options =  { headers: headers };

	let url = "http://caws08-e2e01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=1";
//url = "http://localhost:3003/badotcomadapter-paa/rs/v1/test;ondwanted=1;applicableoffers=vismiat";


  	return this.http.post(url,JSON.stringify(payload),options)
  	.pipe(map((response: Response)=> {

			return response;

  	}));
  }

  getSearchDataForNextSegment(href:any, payload:any) {
  	//href = "http://localhost:3003/badotcomadapter-paa/rs/v1/test;ondwanted=1;applicableoffers=vismiat";
	let headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8',
									'Access-Control-Allow-Method':'*',
									'Access-Control-Allow-Headers':'*',
									'ba_client_applicationName' : 'test'});
let options =  { headers: headers };

  return this.http.post(href,JSON.stringify(payload),options)
  .pipe(map((response: Response)=> {
      return response;
  }));
}

  deleteCache() {
  	let url = "http://caws08-e2e01.baplc.com/badotcomadapter-paa/rs/v1/test;ondwanted=1";
	let headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8',
									'Access-Control-Allow-Method':'*',
									'Access-Control-Allow-Headers':'*',
									'ba_client_applicationName' : 'test'});
let options =  { headers: headers };

  return this.http.delete(url,options)
  .pipe(map((response: Response)=> {
	  console.log('del cache');
      return response;
  }));
}
}
