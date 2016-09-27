import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Resume } from './models';

@Injectable()
export class CvService {

  private url = 'sv.json';

  constructor(private http: Http) { }

  getResume(): Promise<Resume> {
    return this.http.get(this.url)
               .toPromise()
               .then(response => response.json() as Resume)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
