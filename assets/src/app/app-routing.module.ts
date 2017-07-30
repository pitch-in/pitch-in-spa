import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage/homepage.component';
import { PrivacyPolicyComponent } from './static/privacy-policy/privacy-policy.component';
import { FaqComponent } from './static/faq/faq.component';
import { DonateThanksComponent } from './static/donate-thanks/doante-thanks.component';
import { AboutUsComponent } from './static/about-us/about-us.component';
import { LoginComponent } from './accounts/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'donate-thanks', component: DonateThanksComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
