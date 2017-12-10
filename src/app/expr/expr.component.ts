import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'app-expr',
  templateUrl: './expr.component.html',
  styleUrls: ['./expr.component.scss']
})
export class ExprComponent implements OnInit {

  constructor( public nav: NavigationService) { }
    public ngOnInit() {
      this.nav.show();
      this.nav.reset();
      this.nav.setPink();
    }
}
