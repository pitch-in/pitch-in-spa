import { NgModule } from '@angular/core';

import { AboutUsComponent } from './about-us/about-us.component';
import { DonateThanksComponent } from './donate-thanks/doante-thanks.component';
import { FaqComponent } from './faq/faq.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@NgModule({
  imports: [],
  exports: [
    AboutUsComponent,
    DonateThanksComponent,
    FaqComponent,
    PrivacyPolicyComponent
  ],
  declarations: [
    AboutUsComponent,
    DonateThanksComponent,
    FaqComponent,
    PrivacyPolicyComponent
  ],
  providers: []
})
export class StaticModule {}
