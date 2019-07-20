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
  
    getSearchData(data:any) {
  
  console.log('service data', data)
  	return this.http.post("http://localhost:3003/badotcomadapter-paa/rs/v1/test;ondwanted=1;applicableoffers='khushboo'",{})
  	.pipe(map((response: Response)=> { 
    return <any[]>response.json()
    console.log(<any[]>response.json());
  	}));
  }
  }

