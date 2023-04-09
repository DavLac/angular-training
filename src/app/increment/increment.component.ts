import { Component } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html'
})
export class IncrementComponent {
  count: number = 0;
  onIncrementClick = () => this.count++;
}
