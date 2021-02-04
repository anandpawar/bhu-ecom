import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor(private httpClient: HttpClient) { }

  createGeneralAssessment = (data) => {
    return this.httpClient.post(`${environment.apiURL}application/v2`,data, httpOptions);
  }

  createWorkAssessment = (data) => {
    return this.httpClient.post(`${environment.apiURL}application/v2`,data, httpOptions);
  }

  createStudyAssessment = (data) => {
    return this.httpClient.post(`${environment.apiURL}application/v2`,data, httpOptions);
  }
  
  createContact = (data) => {
    return this.httpClient.post(`${environment.apiURL}contactus`,data, httpOptions);
  }

  handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };
}
