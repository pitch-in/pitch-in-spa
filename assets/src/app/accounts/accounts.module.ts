import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // <-- #1 import module

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  exports: [LoginComponent],
  declarations: [LoginComponent],
  providers: []
})
export class AccountsModule {}
