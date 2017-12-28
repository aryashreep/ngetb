import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Articles } from '../interface/articles';

@Injectable()
export class ArticlesService {
  private _articlesURL = 'http://www.etechbuddy.com//assets/data/api/articles.json';
  constructor( private http: Http) {  
  }
  
  getArticles(): Observable<Articles[]> {
    return this.http
	  .get(this._articlesURL)
	  .map((response: Response) => {
		  return <Articles[]>response.json();
	  })
	  .catch(this.handleError);
  }
  
  private handleError(errror: Response) {
	  return Observable.throw(errror.statusText);
  }  
}
