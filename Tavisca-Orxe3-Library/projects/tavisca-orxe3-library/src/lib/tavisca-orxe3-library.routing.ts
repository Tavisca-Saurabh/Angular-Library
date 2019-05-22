import { TaviscaButtonComponent } from './tavisca-button/tavisca-button.component';
import { TaviscaInputComponent } from './tavisca-input/tavisca-input.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TaviscaInputComponent,
  },
  {
    path: 'input',
    component: TaviscaInputComponent,
  },
  {
    path: 'button',
    component: TaviscaButtonComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TaviscaOrxe3LibraryRoutingModule { }
