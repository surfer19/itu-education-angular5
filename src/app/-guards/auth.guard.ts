import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
        //
    }
    public canActivate(): Promise<boolean> {
        console.log('pred promis');
        return new Promise((resolve) => {
            console.log('v promise');
            if (localStorage.getItem('currentUser')) {
                // logged in so return true
                return resolve(true);
            } else {
                //  this.router.navigate(['/login']);
               return resolve(false);
            }
        });
        // if (localStorage.getItem('currentUser')) {
        //     // logged in so return true
        //     return (true);
        // } else {
        //     //  this.router.navigate(['/login']);
        //    return (false);
        // }
    }
}
