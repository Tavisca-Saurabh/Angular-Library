import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'enl-tavisca-button',
  templateUrl: './tavisca-button.component.html',
  styleUrls: ['./tavisca-button.component.css']
})
export class TaviscaButtonComponent implements OnInit {
  @Input() color: string = "";
  @Input() Disabled: boolean;
  constructor() {
   }

  ngOnInit() {
  }

}
