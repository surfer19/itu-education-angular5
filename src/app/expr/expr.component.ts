import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'app-expr',
  templateUrl: './expr.component.html',
  styleUrls: ['./expr.component.scss']
})
export class ExprComponent implements OnInit {
  public incorrect: boolean;
  public correct: boolean;
  public youtube: boolean;

  constructor( public nav: NavigationService) { }
    public ngOnInit() {
      this.nav.show();
      this.nav.reset();
      this.nav.setPink();
      this.youtube = false;
    }

    public pressBtn() {
      this.incorrect = true;
      this.correct = true;
    }

    public pressYoutubeButton() {
      if (this.youtube) {
        this.youtube = false;
      } else {
        this.youtube = true;
      }
    }
}
