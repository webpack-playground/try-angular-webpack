import {Component} from 'angular2/core';
import {AlertButtonComponent} from './alert-button.component';

@Component({
  selector: 'my-app',
  templateUrl: '/src/components/app.component.html',
  directives: [AlertButtonComponent]
})
export class AppComponent {
}
