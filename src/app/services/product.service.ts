import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:3002/v1/product/';
  constructor(private httpClient: HttpClient) {}

  getProduct() {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.httpClient.get(this.url, {
      //api call method
      headers: headers,
    });
  }
}
