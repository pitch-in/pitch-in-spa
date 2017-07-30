import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export interface StreamWrapper<T extends Observable<any>> {
  $: T;
}

export class SubjectWrapper<T> implements StreamWrapper<Subject<T>> {
  $: Subject<T>;

  constructor() {
    this.$ = new Subject();
  }
}

export function mockStream<T extends Observable<any>>($: T): StreamWrapper<T> {
  return { $ };
}
