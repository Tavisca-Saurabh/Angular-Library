import { NgModule } from '@angular/core';
import { TaviscaOrxe3LibraryComponent } from './tavisca-orxe3-library.component';
import {MatButtonModule,MatInputModule} from '@angular/material';
import { TaviscaButtonComponent } from './tavisca-button/tavisca-button.component';
import { TaviscaInputComponent } from './tavisca-input/tavisca-input.component'
import { HotelItemComponent } from './hotel-item/hotel-item.component';
@NgModule({
  declarations: [TaviscaOrxe3LibraryComponent,TaviscaButtonComponent, TaviscaInputComponent,HotelItemComponent],
  imports: [MatButtonModule,MatInputModule],
  exports: [TaviscaOrxe3LibraryComponent,TaviscaButtonComponent,TaviscaInputComponent,HotelItemComponent]
})
export class TaviscaOrxe3LibraryModule { }
