import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { HomepageModule } from './homepage/homepage.module';
import { StaticModule } from './static/static.module';
import { NavbarModule } from './navbar/navbar.module';
import { AccountsModule } from './accounts/accounts.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HomepageModule,
    NavbarModule,
    StaticModule,
    AccountsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
