import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://localhost:3000/v1';
  constructor(private httpClient: HttpClient) {}

  login(data: any) {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    // .set('Access-Control-Allow-Credentials', 'true')
    // .set('Access-Control-Allow-Headers', 'Content-Type')
    // .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    console.log(data);

    return this.httpClient.post(this.url + '/user/login', data, {
      //api call method
      headers: headers,
    });
  }
 
}
