import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JsonService {

  constructor(private http: HttpClient) {
  }

  getJsonData(): Observable<any> {
    return this.http.get("assets/data.json");
  }

}
