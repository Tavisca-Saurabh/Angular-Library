import { NgModule } from '@angular/core';
import { TaviscaOrxe3LibraryComponent } from './tavisca-orxe3-library.component';
import {MatButtonModule} from '@angular/material/button';
import { TaviscaButtonComponent } from './tavisca-button/tavisca-button.component'

@NgModule({
  declarations: [TaviscaOrxe3LibraryComponent,TaviscaButtonComponent],
  imports: [MatButtonModule],
  exports: [TaviscaOrxe3LibraryComponent,TaviscaButtonComponent]
})
export class TaviscaOrxe3LibraryModule { }
