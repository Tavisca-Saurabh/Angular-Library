import { AutosuggestComponent } from './autosuggest/autosuggest.component';
import { NgModule } from '@angular/core';
import { TaviscaOrxe3LibraryComponent } from './tavisca-orxe3-library.component';
import {MatButtonModule, MatInputModule} from '@angular/material';
import { TaviscaButtonComponent } from './tavisca-button/tavisca-button.component';
import { TaviscaInputComponent } from './tavisca-input/tavisca-input.component';
import { HotelItemComponent } from './hotel-item/hotel-item.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaviscaOrxe3LibraryComponent, TaviscaButtonComponent, TaviscaInputComponent, HotelItemComponent, AutosuggestComponent],
  imports: [MatButtonModule, MatInputModule, OverlayModule, CommonModule, FormsModule ],
  exports: [TaviscaOrxe3LibraryComponent, TaviscaButtonComponent, TaviscaInputComponent, HotelItemComponent, AutosuggestComponent]
})
export class TaviscaOrxe3LibraryModule { }
