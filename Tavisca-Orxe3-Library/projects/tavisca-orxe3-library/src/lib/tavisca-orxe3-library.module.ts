
// Component Imports
import { AutosuggestComponent } from './autosuggest/autosuggest.component';
import { TaviscaOrxe3LibraryComponent } from './tavisca-orxe3-library.component';
import { TaviscaButtonComponent } from './tavisca-button/tavisca-button.component';
import { TaviscaInputComponent } from './tavisca-input/tavisca-input.component';
import { HotelItemComponent } from './hotel-item/hotel-item.component';


// Module Imports
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CalendarModule } from './calendar/calendar.module';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    TaviscaOrxe3LibraryComponent,
    TaviscaButtonComponent,
    TaviscaInputComponent,
    HotelItemComponent,
    AutosuggestComponent
  ],
  imports: [
    MatButtonModule,
    MatInputModule,
    OverlayModule,
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    CalendarModule,
    BrowserAnimationsModule
  ],
  exports: [
    TaviscaOrxe3LibraryComponent,
    TaviscaButtonComponent,
    TaviscaInputComponent,
    HotelItemComponent,
    AutosuggestComponent,
    CalendarModule
  ]
})
export class TaviscaOrxe3LibraryModule { }
