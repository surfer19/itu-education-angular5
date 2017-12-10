import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'app-advc',
  templateUrl: './advc.component.html',
  styleUrls: ['./advc.component.scss']
})
export class AdvcComponent implements OnInit {
  public incorrect: boolean;
  public correct: boolean;

  constructor( public nav: NavigationService ) { }
    public ngOnInit() {
      this.nav.show();
      this.nav.reset();
      this.nav.setOrange();
      console.log('zavolany setOrange');
    }
    public pressBtn() {
      this.incorrect = true;
      this.correct = true;
    }
}
