import {Component} from '@angular/core';

@Component({
  selector: 'warning-alert',
  template: `
      <p>{{message}}</p>
  `,
  styles: [`
    p {
      border: 1px solid red;
      color: red;
      width: 300px;
      padding: 20px;
      margin: 20px;
    }
  `]
})

export class WarningAlertComponent {
  message = 'some warning!';
}