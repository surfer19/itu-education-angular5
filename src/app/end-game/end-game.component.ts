import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.scss']
})
export class EndGameComponent implements OnInit {

  constructor( public nav: NavigationService ) { }
    public ngOnInit() {
      this.nav.show();
      // this.nav.reset();
      this.nav.setBlue();
    }

}
