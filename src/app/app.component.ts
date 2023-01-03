import { Component } from '@angular/core';

@Component({
  selector: 'pl-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedMenuIndex: number = 0;

  onMenuIndexChange(index: number) {
    this.selectedMenuIndex = index;
  }
}
