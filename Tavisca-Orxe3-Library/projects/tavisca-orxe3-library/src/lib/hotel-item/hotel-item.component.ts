import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'enl-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.css']
})
export class HotelItemComponent implements OnInit {
  @Input() hotelDetails;
  @Output() hotelSelected = new EventEmitter<{
    startTime: number,
    eventName: String,
    date: Date,
    id: number,
    eventData: { hotelName: String, hotelId: number}
  }>();
  constructor() { }

  ngOnInit() { }

  onHotelClicked() {
    this.hotelSelected.emit({
      startTime: new Date().getTime(),
      id: 3,
      eventName: 'Hotel Selected',
      date: new Date(),
      eventData: { hotelName: this.hotelDetails.name, hotelId: this.hotelDetails.id}
    });
  }
}
