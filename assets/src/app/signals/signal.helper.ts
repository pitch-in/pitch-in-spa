import { Observable } from 'rxjs/Observable';

export interface StreamWrapper<T extends Observable<any>> {
  $: T;
}

export function mockStream<T extends Observable<any>>($: T): StreamWrapper<T> {
  return { $ };
}
