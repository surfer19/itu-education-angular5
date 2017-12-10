import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'app-the-end',
  templateUrl: './the-end.component.html',
  styleUrls: ['./the-end.component.scss']
})
export class TheEndComponent implements OnInit {

  constructor( public nav: NavigationService ) { }
    public ngOnInit() {
      this.nav.show();
    }
}

