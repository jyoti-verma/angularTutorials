import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home3Component } from './home3/home3.component';
import { Home4Component } from './home4/home4.component';

@NgModule({
  declarations: [
    AppComponent,
    Home3Component,
    Home4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
