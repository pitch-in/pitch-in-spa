import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage/homepage.component';
import { FaqComponent } from './static/faq/faq.component';
import { LoginComponent } from './accounts/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
