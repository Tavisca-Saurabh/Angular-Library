import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaviscaOrxe3LibraryModule } from '../../projects/tavisca-orxe3-library/src/lib/tavisca-orxe3-library.module';

@NgModule({
  declarations: [
    AppComponent,
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
