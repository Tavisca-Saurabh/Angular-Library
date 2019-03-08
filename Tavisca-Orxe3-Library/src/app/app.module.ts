import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaviscaOrxe3LibraryModule } from 'tavisca-orxe3-library';
import { HotelItemComponent } from './hotel-item/hotel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TaviscaOrxe3LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
