import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class UsersProxyService {

  constructor(private httpClient: HttpClient) { }

  getUsersFromServer(): Observable<HttpResponse<any>> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users', {observe: 'response'});
  }

}
