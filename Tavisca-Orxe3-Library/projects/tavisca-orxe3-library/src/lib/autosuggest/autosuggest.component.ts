import { Component, OnInit, Input, Output, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';
import * as _ from 'underscore';
import {
  CdkOverlayOrigin,
  ScrollStrategy,
  ScrollStrategyOptions,
  CdkConnectedOverlay
} from '@angular/cdk/overlay';

@Component({
  selector: 'enl-autosuggest',
  templateUrl: './autosuggest.component.html',
  styleUrls: ['./autosuggest.component.css']
})
export class AutosuggestComponent implements OnInit {
  @Input() set options(data: any) {
    // this.setOptions(data);
    this.autosuggestList = data;
  }
  constructor(private readonly sso: ScrollStrategyOptions) {
    this.scrollStrategy = this.sso.block();
  }

  autosuggestList: any;
  focusedIndex = 0;
  @Output() selected = new EventEmitter();
  @Input() config;
  searchString: any;
  scrollStrategy: ScrollStrategy;
  structuredOptionsForAutosuggest = [];
  sortedAutosuggestList = [];
  @ViewChild('optionList') optionList: ElementRef;
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === 40) {
      console.log(this.focusedIndex, this.sortedAutosuggestList.length);
      if (this.focusedIndex < this.sortedAutosuggestList.length - 1) {
        this.focusedIndex += 1;
      } else if (this.focusedIndex === this.sortedAutosuggestList.length - 1) {
        this.focusedIndex = 0;
      }
      this.scrollTo(this.focusedIndex);
    } else if (event.keyCode === 38) {
      console.log('keyup');
      if (this.focusedIndex > 0) {
          this.focusedIndex -= 1;
      } else if (this.focusedIndex === 0) {
        this.focusedIndex = this.sortedAutosuggestList.length - 1;
      }
      this.scrollTo(this.focusedIndex);
    } else if (event.keyCode === 13) {
      this.config.isOpened = false;
      if (this.sortedAutosuggestList[this.focusedIndex]) {
        this.selectedOption(this.sortedAutosuggestList[this.focusedIndex]);
      }
    }
  }

  private scrollTo(_index: any) {
    const options = document.querySelectorAll('.auto-suggest-option');
    if (options[_index]) {
      options[_index].scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  ngOnInit() {

  }

  onResize(ev) {
    // TODO:- take action on window resize
  }

  setOptions(optionsList) {
    const sortedArray = _.sortBy(optionsList, 'title');
    this.config.isOpened = true;
    const alreadyAddedCities = [];
    this.structuredOptionsForAutosuggest = [];
    for (let j = 0; j < optionsList.length; j++) {
      const currentParent = { parent: null, children: [] };
      const currentCity = optionsList[j].CityName;
      if (optionsList[j].SearchType === 'City') {
        currentParent['parent'] = optionsList[j];
        this.structuredOptionsForAutosuggest.push(currentParent);
      } else if (optionsList[j].SearchType === 'Airport') {
        if (alreadyAddedCities.indexOf(optionsList[j].CityName) === -1 ) {
          for (let i = j; i < optionsList.length; i++) {
            const option = optionsList[i];
            if (option.CityName === currentCity) {
              if (option.Name.indexOf('All Airports') > -1) {
                currentParent['parent'] = option;
              } else {
                currentParent['children'].push(option);
              }
            }
          }
          if (!currentParent.parent) {
            currentParent.parent = currentParent.children[0];
            delete currentParent.children;
          }
          this.structuredOptionsForAutosuggest.push(currentParent);
          alreadyAddedCities.push(currentCity);
        } else {
          continue;
        }
      }
    }
    this.getList();
  }


  getList() {
    const list = [];
        for (let i = 0; i < this.structuredOptionsForAutosuggest.length; i++) {
          const currentItem = this.structuredOptionsForAutosuggest[i];
          list.push(currentItem.parent);
          if (currentItem.children && currentItem.children.length > 0) {
            for (let j = 0; j < currentItem.children.length; j++) {
              currentItem.children[j]['subClass'] = true;
              list.push(currentItem.children[j]);
            }
          }
        }
    this.sortedAutosuggestList = list;
  }


  selectedOption(ev) {
    this.selected.emit(ev);
    const selected = {
      CityName: `${ev.CityName}` ? `${ev.CityName}` : '',
      StateCode: `${ev.StateCode}` ? `, ${ev.StateCode}` : '',
      CountryCode: `${ev.CountryCode}` ? `, ${ev.CountryCode}` : '',
      Code: `${ev.Code}` ? ` - (${ev.Code})` : '',
      Name: `${ev.Name}` ? ` ${ev.Name}` : '',
    };
    this.searchString = `${selected.CityName}${selected.StateCode}${selected.CountryCode}${selected.Code}${selected.Name}`;
  }

  initiateSearch(ev) {
    if (this.searchString && this.searchString.length > 0 && ev.keyCode !== 13) {
      const sortedList = [];
      this.setOptions(this.autosuggestList);
      for (let i = 0; i < this.autosuggestList.length; i++) {
        const currentObj = this.autosuggestList[i];
        if (currentObj['CityName'].toLowerCase().indexOf(this.searchString) > -1
        || currentObj['Name'].toLowerCase().indexOf(this.searchString) > -1 ) {
          sortedList.push(currentObj);
        }
      }
      this.setOptions(sortedList);
    } else {
      this.config.isOpened = false;
    }
  }

  hoverIn(index) {
    this.focusedIndex = index;
  }
}
