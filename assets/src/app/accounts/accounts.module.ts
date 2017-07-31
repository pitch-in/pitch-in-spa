import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; // <-- #1 import module

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { UserService } from './user.service';

import { UserStream } from './user.stream';
import { UpdateUserStream } from './update-user.stream';
import { LoginStream } from './login.stream';
import { CreateUserStream } from './create-user.stream';

@NgModule({
  imports: [BrowserModule, RouterModule, ReactiveFormsModule],
  exports: [LoginComponent, SignupComponent],
  declarations: [LoginComponent, SignupComponent],
  providers: [
    CreateUserStream,
    LoginStream,
    UpdateUserStream,
    UserStream,
    UserService
  ]
})
export class AccountsModule {}
