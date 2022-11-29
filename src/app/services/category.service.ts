import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  url = 'http://localhost:3003/v1/category/';
  constructor(private httpClient: HttpClient) {}

  getCatgeory() {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    // .set('Access-Control-Allow-Credentials', 'true')
    // .set('Access-Control-Allow-Headers', 'Content-Type')
    // .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

    return this.httpClient.get(this.url, {
      //api call method
      headers: headers,
    });
  }
}
