import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StreamWrapper } from '../signals/signal.helper';

import { User } from './accounts.model';
import { LoginStream } from './login.stream';
import { UpdateUserStream } from './update-user.stream';
import { CreateUserStream } from './create-user.stream';

import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/do';

@Injectable()
export class UserStream implements StreamWrapper<Observable<User>> {
  $: Observable<User>;

  constructor(
    loginStream: LoginStream,
    updateUserStream: UpdateUserStream,
    createUserStream: CreateUserStream
  ) {
    const loginUser = loginStream.$.do(console.log);
    const createUser = createUserStream.$.do(console.log);
    const updateUser = updateUserStream.$.do(console.log);

    this.$ = Observable.merge(loginUser, createUser, updateUser);
  }
}
