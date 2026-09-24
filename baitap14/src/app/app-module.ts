import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductListComponent } from './product-list-component/product-list-component';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, ProductListComponent],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
