import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  imports: [RouterModule],
  exports: [HomepageComponent],
  declarations: [HomepageComponent],
  providers: []
})
export class HomepageModule {}
