import {Injectable} from 'angular2/core';

@Injectable()
export class MyService {
  loadData(): string[] {
    return ['a', 'b', 'c'];
  }
}
