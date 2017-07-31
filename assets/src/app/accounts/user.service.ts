import { Injectable } from '@angular/core';
import { ApiService } from 'app/core/api.service';

import { User, LoginCredentials } from './accounts.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor(private apiService: ApiService) {}

  login = (credentials: LoginCredentials): Observable<User> =>
    this.apiService.post('sessions', credentials);

  logout = () => this.apiService.delete('sessions');

  create = (user: User): Observable<User> =>
    this.apiService.post('users', user);
  update = (user: User): Observable<User> => this.apiService.put('users', user);
}
