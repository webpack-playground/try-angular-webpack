import {Component} from 'angular2/core';
import {AlertButtonComponent} from './alert-button.component';
import {MyService} from '../services/my.service';

@Component({
  selector: 'my-app',
  templateUrl: '/src/components/app.component.html',
  directives: [AlertButtonComponent],
  providers: [MyService]
})
export class AppComponent {
  private data: string[];

  constructor(private myService: MyService) {
    this.data = myService.loadData();
  }
}
