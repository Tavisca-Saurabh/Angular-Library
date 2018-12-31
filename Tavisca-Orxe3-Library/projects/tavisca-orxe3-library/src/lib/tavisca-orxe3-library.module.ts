import { NgModule } from '@angular/core';
import { TaviscaOrxe3LibraryComponent } from './tavisca-orxe3-library.component';
import {MatButtonModule,MatInputModule} from '@angular/material';
import { TaviscaButtonComponent } from './tavisca-button/tavisca-button.component';
import { TaviscaInputComponent } from './tavisca-input/tavisca-input.component'

@NgModule({
  declarations: [TaviscaOrxe3LibraryComponent,TaviscaButtonComponent, TaviscaInputComponent],
  imports: [MatButtonModule,MatInputModule],
  exports: [TaviscaOrxe3LibraryComponent,TaviscaButtonComponent,TaviscaInputComponent]
})
export class TaviscaOrxe3LibraryModule { }
