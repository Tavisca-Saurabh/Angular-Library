import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateCalendarComponent } from './calendar.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [DateCalendarComponent],
  exports: [DateCalendarComponent]
})
export class CalendarModule { }
