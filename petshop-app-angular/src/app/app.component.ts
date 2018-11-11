import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 1;

  items = ['Items', 'Item2', 'Item3'];

  countUpOne()
  {
    this.title++;
  }
}
