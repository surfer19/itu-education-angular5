import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private model: any = {};
  private loading = false;
  private error = '';

  constructor(
    private router: Router,
    // private authenticationService: AuthenticationService
  ) { }

  public ngOnInit() {
    // reset login status
    // this.authenticationService.logout();
  }
//   .subscribe((result) => {
  private login() {
      this.router.navigate(['/']);
      // this.loading = true;
      // call our backend service
      // this.authenticationService.login(this.model.username, this.model.password).map((res) => {
      //     console.log('win');
      //     if (res === true) {
      //     // this.router.navigate(['/']);
      //     } else {
      //         this.error = 'Username or password is incorrect';
      //         this.loading = false;
      //     }
      // });
  }
}
