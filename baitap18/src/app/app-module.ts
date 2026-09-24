import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CustomerListComponent } from './customer-list-component/customer-list-component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [App, CustomerListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App],
})
export class AppModule {}
