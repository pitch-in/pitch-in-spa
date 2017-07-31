import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './module-import-guard';

import { ApiService } from './api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [],
  declarations: [],
  providers: [ApiService]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
