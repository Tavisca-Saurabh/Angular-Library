import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CalendarService } from './calendar.service';
import { CalendarConfig } from './calendar-config';
import { openCloseAnimation } from './animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'enl-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  animations: [
    openCloseAnimation
  ]
})
export class DateCalendarComponent implements OnInit {
  @Input() calendarConfig: CalendarConfig;

  @Output() datesSelected: EventEmitter<{}> = new EventEmitter<{}>();

  /** Contains Weekday Initials */
  dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  // dayNames = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  /** Stores config for the month to be shown */
  config: any;

  /** Stores dates to be rendered on UI */
  calendar: any = {};

  /** Todays' Date */
  TODAY: Date;

  /** Stores keys present in the calendar object  */
  calendarKeys = [];

  /** Flag for disabling Previous month toggle button */
  isLeftMonthToggleDisabled = false;

  /** Flag for disabling Next month toggle button */
  isRightMonthToggleDisabled = false;

  isHandset;

  /** Used when showing historical year dropdown
   * Range of calendar year options
   */
  historicalYears = {
    min: 1970,
    max: new Date().getFullYear(),
    range: []
  };

  defaultSelectionStartDate;
  defaultSelectionEndDate;

  constructor(private calendarService: CalendarService, private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {

    if (this.calendarConfig && this.calendarConfig.isHistoricalDatePicker) {
      this.historicalYears.range = Array.from(Array(this.historicalYears.max - this.historicalYears.min).keys());
    }

    this.TODAY = new Date();
    this.defaultSelectionStartDate = this.calendarConfig.selectionStartDate;
    this.defaultSelectionEndDate = this.calendarConfig.selectionEndDate;

    this.breakpointObserver.observe(Breakpoints.Handset).subscribe((result) => {
      if (result.matches) {
        this.isHandset = true;
        this.calendarConfig.isHandset = this.isHandset;
      } else {
        this.isHandset = false;
        this.calendarConfig.isHandset = this.isHandset;
      }
    });

    this.showCalendar();
  }

  /**
   * Show first render of calendar with today's date as starting date
   */
  showCalendar() {
    this.config = {};
    this.config.today = new Date();

    this.config.month1 = this.calendarService.getMonthConfig(this.config.today);
    this.calendar.month1 = this.calendarService.getMonthDays(
      this.config.month1,
      this.calendarConfig.isDisabledBefore
    );

    if (this.calendarConfig.twoMonthView) {
      this.config.month2 = this.calendarService.getMonthConfig(
        new Date(new Date(new Date().setDate(1)).setMonth(this.config.today.getMonth() + 1))
      );
      this.calendar.month2 = this.calendarService.getMonthDays(
        this.config.month2,
        this.calendarConfig.isDisabledBefore
      );
    }

    this.calendarKeys = Object.keys(this.calendar);

    if (
      this.calendarConfig.rangeSelectionType &&
      this.calendarConfig.preSelectedRange
    ) {
      this.selectDatesInRange();
    } else {
      this.selectSingleSelectedDate();
    }

    this.checkToggleIcons();

    // Toggle selected month in view
    if (this.calendarConfig.selectionStartDate.date) {
      const monthDiff =
        this.calendarConfig.selectionStartDate.date.getMonth() -
        this.config.month1.month;
      const yearDiff = this.calendarConfig.selectionStartDate.date.getFullYear() -
        this.config.month1.year;
      for (let i = 0; i < (monthDiff + yearDiff * 12); i++) {
        this.showNextMonth();
      }
    }
  }

  /**
   * Check condition for previous and next month toggle buttons
   */
  checkToggleIcons() {
    if (this.calendarConfig.isHistoricalDatePicker) {
      this.isLeftMonthToggleDisabled = false;
      this.isRightMonthToggleDisabled = false;
    } else  {
      // checking for left / prev month toggle
    if (
      this.TODAY.getMonth() === this.config.month1.month &&
      this.TODAY.getFullYear() === this.config.month1.year
    ) {
      this.isLeftMonthToggleDisabled = true;
    } else {
      this.isLeftMonthToggleDisabled = false;
    }

    // checking for right / next month toggle
    const monthDiff = 1 + (this.config.month1.month - this.TODAY.getMonth()) + (this.config.month1.year - this.TODAY.getFullYear()) * 12;
    if (monthDiff < this.calendarConfig.isDisabledAfter - 1) {
      this.isRightMonthToggleDisabled = false;
    } else {
      this.isRightMonthToggleDisabled = true;
    }
  }
  }

  /** Toggle view to show a month before */
  showPrevMonth() {
    if (!this.isLeftMonthToggleDisabled) {
      this.config.month1 = this.calendarService.getMonthConfig(
        new Date(
          this.config.month1.date.setMonth(
            this.config.month1.date.getMonth() - 1
          )
        )
      );
      this.calendar.month1 = this.calendarService.getMonthDays(
        this.config.month1,
        this.calendarConfig.isDisabledBefore
      );

      if (this.calendarConfig.twoMonthView) {
        this.config.month2 = this.calendarService.getMonthConfig(
          new Date(
            this.config.month2.date.setMonth(
              this.config.month2.date.getMonth() - 1
            )
          )
        );
        this.calendar.month2 = this.calendarService.getMonthDays(
          this.config.month2,
          this.calendarConfig.isDisabledBefore
        );
      }
      this.checkToggleIcons();

      if (this.calendarConfig.rangeSelectionType) {
        this.selectDatesInRange();
      } else {
        this.selectSingleSelectedDate();
      }
    }
  }

  /** Toggle view to show a month after */
  showNextMonth() {
    if (!this.isRightMonthToggleDisabled) {
      this.config.month1 = this.calendarService.getMonthConfig(
        new Date(
          this.config.month1.date.setMonth(
            this.config.month1.date.getMonth() + 1
          )
        )
      );
      this.calendar.month1 = this.calendarService.getMonthDays(
        this.config.month1,
        this.calendarConfig.isDisabledBefore
      );

      if (this.calendarConfig.twoMonthView) {
        this.config.month2 = this.calendarService.getMonthConfig(
          new Date(
            this.config.month2.date.setMonth(
              this.config.month2.date.getMonth() + 1
            )
          )
        );
        this.calendar.month2 = this.calendarService.getMonthDays(
          this.config.month2,
          this.calendarConfig.isDisabledBefore
        );
      }
      this.checkToggleIcons();

      if (this.calendarConfig.rangeSelectionType) {
        this.selectDatesInRange();
      } else {
        this.selectSingleSelectedDate();
      }
    }
  }

  /**
   * Handle selection of date
   * @param date - date selected
   */
  onSelectDate(date) {
    this.resetSelection();

    // Check if both selections made, then reset the values
    if (
      this.calendarConfig.selectionStartDate &&
      this.calendarConfig.selectionEndDate
    ) {
      this.calendarConfig.selectionStartDate = null;
      this.calendarConfig.selectionEndDate = null;
    }

    // Check if date already selected
    if (!this.calendarConfig.selectionStartDate) {
      this.calendarConfig.selectionStartDate = date;
      this.selectSingleSelectedDate();
    } else {
      // Check if RANGE sleection or not
      if (this.calendarConfig.rangeSelectionType) {
        if (
          this.inSelectionRange(this.calendarConfig.selectionStartDate, date) &&
          !this.calendarService.isDateBefore(
            date.date,
            this.calendarConfig.selectionStartDate.date
          ) && !this.calendarService.isSameAsDate(
            date.date,
            this.calendarConfig.selectionStartDate.date
          )
        ) {
          this.calendarConfig.selectionEndDate = date;
          this.selectDatesInRange();
          this.calendarConfig.selectionStartDate.isSelected = true;
          date.isSelected = true;
          if (!this.calendarConfig.isHandset) {
            this.datesSelected.emit({ close: true });
          }
        } else {
          this.calendarConfig.selectionEndDate = null;
          this.calendarConfig.selectionStartDate.isSelected = false;
          this.calendarConfig.selectionStartDate = date;
          this.calendarConfig.selectionStartDate.isSelected = true;
        }
      } else {
        this.calendarConfig.selectionStartDate.isSelected = false;
        this.calendarConfig.selectionStartDate = date;

        this.selectSingleSelectedDate();
      }
    }

    if (
      this.calendarConfig.rangeSelectionType &&
      this.calendarConfig.selectionStartDate &&
      this.calendarConfig.selectionEndDate &&
      !this.calendarConfig.isHandset
    ) {
      this.datesSelected.emit();
    }

    if (!this.calendarConfig.rangeSelectionType && this.calendarConfig.selectionStartDate && !this.isHandset) {
      this.datesSelected.emit();
    }
  }

  /**
   * Check if date selected is within the given date span
   * @param startDate - start date
   * @param endDate - end date
   */
  inSelectionRange(startDate, endDate) {
    const daysDiff =
      this.calendarService.getNumberOfDaysBetweenDate(
        startDate.date,
        endDate.date
      ) + 1;
    if (daysDiff <= this.calendarConfig.maxSelectionRange) {
      return true;
    }
    return false;
  }

  selectSingleSelectedDate() {
    if (this.calendarConfig.selectionStartDate) {
      this.calendarKeys.forEach(key => {
        this.calendar[key].forEach(date => {
          // Check for empty pads and beforeToday dates
          if (date.isInvalid || (!this.calendarConfig.isHistoricalDatePicker && date.isBeforeToday)) {
            return;
          }
          if (
            this.calendarService.isSameAsDate(
              date.date,
              this.calendarConfig.selectionStartDate.date
            )
          ) {
            date.isSelected = true;
          }
        });
      });
    }
  }

  /**
   * Highlight dates within the selected date range
   * @param startDate  - start date
   * @param endDate - end date
   */
  selectDatesInRange() {
    const startDate = this.calendarConfig.selectionStartDate;
    const endDate = this.calendarConfig.selectionEndDate;

    if (startDate && endDate) {
      this.calendarKeys.forEach(key => {
        this.calendar[key].forEach(date => {
          // Check for empty pads and beforeToday dates
          if (date.isInvalid || date.isBeforeToday) {
            return;
          }
          if (this.calendarService.isSameAsDate(date.date, startDate.date) ||
            this.calendarService.isSameAsDate(date.date, endDate.date)
          ) {
            date.isSelected = true;
          }

          if (
            this.calendarService.isDateInBetween(
              date.date,
              startDate.date,
              endDate.date
            )) {
              date.isDateInBetween = true;
            }
        });
      });
    } else if (startDate) {
      this.selectSingleSelectedDate();
    }
  }

  /** Reset selection for previous range */
  resetSelection() {
    this.calendarKeys.forEach(key => {
      this.calendar[key].forEach(date => {
        date.isSelected = false;
        date.isDateInBetween = false;
      });
    });
  }

  onDoneBtn() {
    if (
      this.calendarConfig.rangeSelectionType &&
      this.calendarConfig.selectionStartDate &&
      this.calendarConfig.selectionEndDate
    ) {
      this.datesSelected.emit();
    }
    if (!this.calendarConfig.rangeSelectionType && this.calendarConfig.selectionStartDate) {
      this.datesSelected.emit();
    }
  }

  resetSelectedDates() {
    this.resetSelection();
    this.calendarConfig.selectionStartDate = null;
    this.calendarConfig.selectionEndDate = null;
  }

  closeDatePopover() {
    this.calendarConfig.selectionStartDate = this.defaultSelectionStartDate;
    this.calendarConfig.selectionEndDate = this.defaultSelectionEndDate;

    this.datesSelected.emit();
  }

  changeHistoricalYear(event) {
    const historicalYear = parseInt(event.target.value);

    const yearDiff = historicalYear - this.config.month1.year;

    for (let i = 0; i < (Math.abs(yearDiff) * 12 ); i++) {
      if (yearDiff > 0) {
        this.showNextMonth();
      }
      if (yearDiff < 0) {
        this.showPrevMonth();
      }
    }
  }

  hoverIn(date) {
    // TODO:- On hover highlight date range
  }
}
