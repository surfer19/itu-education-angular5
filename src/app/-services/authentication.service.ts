import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    public login(username: string, password: string) { // Observable<boolean> {
        // store json on this end-point
        console.log(username);
        let a = 'a';
        return this.http.post('/api/authenticate',
            JSON.stringify({username, a})).map((res) => {
                 console.log(res);
            });
            // console.log('response', response);
            // console.log('token = ', response.json());
            // login successful if there's a jwt token in the response
            // const token = response.json() && response.json().token;
            // const users = response.json().user_arr;
            // if (token) {
                // set token property
                // this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                // localStorage.setItem('currentUser', JSON.stringify({ username, token }));
                // localStorage.removeItem('allUsers');
                // localStorage.setItem('allUsers', JSON.stringify(users));
                // return true to indicate successful login
                // return true;
            // } else {
                // return false to indicate failed login
                // return false;
            //
        }
    public logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
