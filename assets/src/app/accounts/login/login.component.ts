import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'pi-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  professionOptions: ['Web Development', 'Data', 'Design', 'None of those'];

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      referral: '',
      pro: this.fb.group({
        phone: ['', Validators.required],
        professionType: ['', Validators.required],
        skills: '',
        experienceStartsAt: ['', Validators.required]
      }),
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log('valid?', this.userForm.valid);
    console.log('form', this.userForm.value);
  }
}
