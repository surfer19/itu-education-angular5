import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    // constructor(private http:Http) {
    //   this.http.get('https://jsonplaceholder.typicode.com/photos')
    //     .map(response => response.json())
    //     .subscribe(res => this.myData = res);
    // }
    // tiles = [
    //   {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    //   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    // ];
}
