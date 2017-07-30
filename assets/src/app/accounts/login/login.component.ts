import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserStream } from '../user.stream';
import { LoginStream } from '../login.stream';

@Component({
  selector: 'pi-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  professionOptions: ['Web Development', 'Data', 'Design', 'None of those'];

  constructor(
    private fb: FormBuilder,
    private userStream: UserStream,
    private loginStream: LoginStream
  ) {
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.userStream.$.subscribe(console.log);
  }

  ngOnInit() {}

  onSubmit() {
    console.log('valid?', this.userForm.valid);
    console.log('form', this.userForm.value);
    console.log(this.userForm.errors);
    if (this.userForm.valid) {
      this.loginStream.$.next(this.userForm.value);
    }
  }
}
