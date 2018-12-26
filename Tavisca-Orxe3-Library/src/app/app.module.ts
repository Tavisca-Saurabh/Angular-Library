import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaviscaOrxe3LibraryModule } from 'tavisca-orxe3-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaviscaOrxe3LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
