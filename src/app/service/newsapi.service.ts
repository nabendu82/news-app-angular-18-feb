import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  constructor(private _http: HttpClient) { }

  topNews='https://newsapi.org/v2/top-headlines?country=us&apiKey=useyourown';

  topHeadlines(): Observable<any>{
    return this._http.get(this.topNews);
  }
}
