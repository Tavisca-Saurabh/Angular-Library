import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { MonthConfig, DateConfig } from './calendar-config';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  /** Todays' Date */
  TODAY: Date;

  /** Contains names of months */
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


  constructor() {
    this.TODAY = new Date();
  }

  /**
   * Get config for a month in calendar
   *
   * @param date - Any Date within the month to be shown
   * @returns - Config for the month
   */
  getMonthConfig(date: Date) {
    const tempConfig: MonthConfig = {};

    tempConfig.date = new Date( date.setDate(1));
    tempConfig.month = tempConfig.date.getMonth();
    tempConfig.monthName = this.monthNames[tempConfig.month];
    tempConfig.year = tempConfig.date.getFullYear();
    tempConfig.firstDay = tempConfig.date.getDay() === 0 ? 6 : tempConfig.date.getDay() - 1;
    tempConfig.numOfDays = this.getDaysOfMonth(tempConfig.month, tempConfig.year);

    return tempConfig;
  }

  /**
   * Get dates array for a given month config
   *
   * @param config - Config object for a month
   * @returns - Array containing date objects to be rendered
   */
  getMonthDays(config: MonthConfig, beforeDate: Date) {
    const tempCalendar: DateConfig[] = [];

    // add empty pads before start of first day
    for (let index = 0; index < config.firstDay ; index ++) {
      tempCalendar.push({
        date: null,
        value: 0,
        isWeekend: tempCalendar.length % 7 === 5 || tempCalendar.length % 7 === 6 ,
        isBeforeToday: false,
        isToday: false,
        day: -1,
        isInvalid: true,
        isSelected: false,
        isInBetweenRange: false,
        isDisabled: false
      });
    }

    // add dates
    for (let index = 1; index <= config.numOfDays; index ++) {
      tempCalendar.push({
        date: new Date(config.year, config.month, index),
        value: index,
        isWeekend: tempCalendar.length % 7 === 5 || tempCalendar.length % 7 === 6 ,
        isBeforeToday: this.isBeforeToday(index, config.month, config.year),
        isToday: this.isToday(index, config.month, config.year),
        day: this.getDay(index, config.month, config.year),
        isInvalid: false,
        isSelected: false,
        isInBetweenRange: false,
        isDisabled: beforeDate ?
          this.isDateBefore(new Date(config.year, config.month, index), beforeDate) ||
          this.isSameAsDate(new Date(config.year, config.month, index), beforeDate)
          : false
      });
    }

    // Add empty pads after last day
    const endPaddingValue = 7 - tempCalendar[tempCalendar.length - 1].day;
    for (let index = 1; index < endPaddingValue; index++) {
      tempCalendar.push({
        date: null,
        value: 0,
        isWeekend: tempCalendar.length % 7 === 5 || tempCalendar.length % 7 === 6 ,
        isBeforeToday: false,
        isToday: false,
        day: -1,
        isInvalid: true,
        isSelected: false,
        isInBetweenRange: false,
        isDisabled: false
      });
    }
    return tempCalendar;
  }

  /** Get week index for that date
   * 0 - M,
   * 1 - T,
   * 2 - W,
   * 3 - T,
   * 4 - F,
   * 5 - S,
   * 6 - S
   *
   * @returns - number
   */
  getDay(date, month, year) {
    const day = new Date(year, month, date).getDay();
    return day === 0 ? 6 : day - 1;
  }

  /** Check is date formed is on a weekend
   * @param date - date
   * @param month - month index
   * @param year - full year
   * @returns - boolean
   */
  isWeekend(date: number, month: number, year: number) {
    return this.getDay(date, month, year) === 5 || this.getDay(date, month, year) === 6 ;
  }

  /** Check is date formed is before today
   * @param date - date
   * @param month - month index
   * @param year - full year
   * @returns - boolean
   */
  isBeforeToday(date: number, month: number, year: number) {
    const tempDate = new Date(year, month, date);
    return this.isDateBefore(tempDate, this.TODAY);
  }

  /** Check is date formed is same as today
   * @param date - date
   * @param month - month index
   * @param year - full year
   * @returns - boolean
   */
  isToday(date: number, month: number, year: number) {
    const tempDate = new Date(year, month, date);

    return this.isSameAsDate(tempDate, this.TODAY);
  }

  isSameAsDate(date1, date2) {
    return moment(
      this.getDateInMomentFormat(date1)
    ).isSame(
      this.getDateInMomentFormat(date2)
    );
  }

  /** Check if one date is in between the other two
   * @param date - date to be checked
   * @param startDate - starting date
   * @param endDate - ending date
   * @returns - boolean
   */
  isDateInBetween(date, startDate, endDate) {
    return moment(
      this.getDateInMomentFormat(date)
    ).isBetween(
      this.getDateInMomentFormat(startDate),
      this.getDateInMomentFormat(endDate)
    );
  }

  /** Check if one date is before the other date
   * @param date - date to be checked
   * @param date2 - threshold date
   * @returns - boolean
   */
  isDateBefore(date, date2) {
    return moment(
      this.getDateInMomentFormat(date)
    ).isBefore(
      this.getDateInMomentFormat(date2)
    );
  }

  /** Get number of days between 2 dates
   * @param startDate - first date
   * @param endDate - second date
   * @returns - number of differnce in days
   */
  getNumberOfDaysBetweenDate(startDate, endDate) {
    return moment(this.getDateInMomentFormat(endDate)).diff(
      moment(this.getDateInMomentFormat(startDate)),
      'days'
      );
  }

  /** Get date in format accepted by Moment with 0 paddings
   * @param date - date object
   * @returns formatted date
   */
  getDateInMomentFormat(date) {
    if (date) {
        return date.getFullYear() + '-' +
        this.addZeroPad((date.getMonth() + 1)) + '-' +
        this.addZeroPad(date.getDate());
    }
  }

  /** Add zero pads to date or month index */
  addZeroPad(input) {
    input = input.toString();
    return input.length === 1 ? '0' + input : input;
  }

  /** Returns number of days in a month */
  getDaysOfMonth(month: number, year: number) {
    if (month === 1 && this.isLeapYear(year)) {
      return 29;
    }
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
  }

  /** Checks if the year is a leap year or not */
  isLeapYear(year) {
    return moment([year]).isLeapYear();
  }
}
