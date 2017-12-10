import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'app-task-choose',
  templateUrl: './task-choose.component.html',
  styleUrls: ['./task-choose.component.scss']
})
export class TaskChooseComponent implements OnInit {

  constructor( public nav: NavigationService ) { }

  public ngOnInit() {
    this.nav.show();
    this.nav.reset();
    this.nav.setBlue();
  }
}
