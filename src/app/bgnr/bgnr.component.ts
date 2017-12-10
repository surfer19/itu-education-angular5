import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'app-bgnr',
  templateUrl: './bgnr.component.html',
  styleUrls: ['./bgnr.component.scss']
})
export class BgnrComponent implements OnInit {

  constructor( public nav: NavigationService) { }
    public ngOnInit() {
      this.nav.show();
      this.nav.reset();
      this.nav.setGreen();
    }
}
