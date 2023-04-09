import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  inputValid: boolean = false;

  onInput = (event: Event) => {
    if((<HTMLInputElement>event.target).value.length >= 5) {
      this.inputValid = true;
    } else {
      this.inputValid = false;
    }
  }

  getColor() {
    if(this.inputValid === true) {
      return 'green';
    } else {
      return 'red';
    }
  }
}
