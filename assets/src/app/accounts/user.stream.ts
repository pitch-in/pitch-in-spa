import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { StreamWrapper } from '../signals/signal.helper';
import { User } from './accounts.model';
import { UserService } from './user.service';
import { LoginStream } from './login.stream';
import { UpdateUserStream } from './update-user.stream';
import { CreateUserStream } from './create-user.stream';

import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Injectable()
export class UserStream implements StreamWrapper<Observable<User>> {
  $: Observable<User>;

  constructor(
    loginStream: LoginStream,
    updateUserStream: UpdateUserStream,
    createUserStream: CreateUserStream,
    userService: UserService,
    router: Router
  ) {
    const loginUser = loginStream.$
      .flatMap(userService.login)
      .do(() => router.navigate(['/homepage']));
    const createUser = createUserStream.$
      .flatMap(userService.create)
      .do(userService.create);
    const updateUser = updateUserStream.$.flatMap(userService.update);

    this.$ = Observable.merge(loginUser, createUser, updateUser);
  }
}

// function (stream: Observable<User>, )
