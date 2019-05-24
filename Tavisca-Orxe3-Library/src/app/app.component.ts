import { Component, OnInit } from '@angular/core';
import { AUTOSUGGEST_MOCK_LIST } from './autosuggest-options-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tavisca-Orxe3-Application';

  /** Config for autosuggest */
  autosuggestOptions: any;
  autosuggestConfig: any;

  /** Config for datepicker */
  calendarConfig: any;
  showDate = false;

  constructor() {
  }

  ngOnInit() {
  /** Default configs for Autosuggest */
    this.autosuggestOptions = AUTOSUGGEST_MOCK_LIST;
    this.autosuggestConfig = {
      placeholder: 'Airport or City',
      isOpened: false,
      styles: {
          activeItem : {
              'background': '#0693c1',
              'color': '#ffffff'
          }
      },
    };

    /** Default config for datepicker */
    this.calendarConfig = {
      twoMonthView: true,
      selectionStartDate: new Date(),
      selectionEndDate: new Date(),
      rangeSelectionType: true,
      maxSelectionRange: 30,
      preSelectedRange: 3,
      isHandset: false,
      isDisabledBefore: null,
      isDisabledAfter: 12,
      isHistoricalDatePicker: false
    };
  }

  selectedAutosuggestOption(ev) {
    this.autosuggestConfig.isOpened = false;
  }

  selectedDate(ev) {
    if (ev && ev.close) {
      this.showDate = false;
    }
  }
}
