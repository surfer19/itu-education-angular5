import { Component, OnInit } from '@angular/core';
import { User } from '../-models/user';
import { UserService } from '../-services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public users: User[] = [];
  constructor(
    // private userService: UserService
  ) {}
  public ngOnInit() {
    // this.userService.getUsers()
    // .subscribe(users => {
    //     this.users = users;
    // });
  }

}
