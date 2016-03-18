import {Component} from 'angular2/core';

@Component({
  selector: 'my-alert-button',
  templateUrl: '/src/components/alert-button.component.html'
})
export class AlertButtonComponent {
  onClick(): void {
    window.alert('Hello!');
  }
}
