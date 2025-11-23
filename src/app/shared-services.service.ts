import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USERS_URL } from './url-constants';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  constructor(private httpClient: HttpClient) { }

  loggedIn: boolean = true;

  getUsers() {
    return this.httpClient.get(USERS_URL);
  }

  
}
