import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'enl-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.css']
})
export class HotelItemComponent implements OnInit {
  @Input() hotelDetails;
  constructor() {
   }

  ngOnInit() {
  }

}
