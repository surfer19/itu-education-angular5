import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from './authentication.service';
import { User } from '../-models/user';

@Injectable()
  export class UserService {

    constructor(
      private http: Http,
      private authenticationService: AuthenticationService) {
  }
  public getUsers(): Observable<User[]> {
      // add authorization header with jwt token
      const headers = new Headers({ Authorization: 'Bearer ' + this.authenticationService.token });
      const options = new RequestOptions({ headers});

      // get users from api
      return this.http.get('/api/users', options)
          .map((response: Response) => response.json());
  }
}