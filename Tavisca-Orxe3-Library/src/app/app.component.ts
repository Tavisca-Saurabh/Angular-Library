import { Component, OnInit } from '@angular/core';
import {LIST} from './autosuggest-options-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tavisca-Orxe3-Application';
  // Config for autosuggest
  options: any;
  autosuggestConfig: any;
  ngOnInit() {

   this.options = LIST;

  this.autosuggestConfig = {
    placeholder: 'Airport or City',
    isOpened: false,
    style: {
            activeItem : {
                'background': '#0693c1',
                'color': '#ffffff'
            },
            hoverItem: {
              'background': '#0693c1',
              'color': '#ffffff'
            }
    },
  };
  }
  selectedOption(ev) {
    this.autosuggestConfig.isOpened = false;
  }
}
