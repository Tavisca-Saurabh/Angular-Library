export interface CalendarConfig {
  /** Show 2 months view or not */
  twoMonthView: boolean;
  /** Selection start date */
  selectionStartDate?: any;
  /** Selection start date */
  selectionEndDate?: any;
  /** Selection type */
  rangeSelectionType: boolean;
  /** Maximum allowed dates to be selected */
  maxSelectionRange: number;
  /** Preselected days */
  preSelectedRange: number;
  /** Is handset */
  isHandset: boolean;
  /** Is Disabled before */
  isDisabledBefore: Date;
  /** Is Disabled after number of months */
  isDisabledAfter: number;
  /** Is Historical date picker */
  isHistoricalDatePicker: boolean;
}
export interface MonthConfig {
  /** Date of first day of month */
  date?: Date;
  /** Month Index */
  month?: number;
  /**Month Name  */
  monthName?: string;
  /** Year */
  year?: number;
  /** Week index for first day of month ( 0 -> Mon to 6 -> Sun) */
  firstDay?: number;
  /** Number of days in month */
  numOfDays?: number;
}

export interface DateConfig {
  /** Date */
  date?: Date;
  /** Value to be shown */
  value: number;
  /** Is Date falls on weekend */
  isWeekend: boolean;
  /** Is date before Today's date */
  isBeforeToday: boolean;
  /** If date is of today */
  isToday: boolean;
  /** Week Index (defaults to -1 for invalida dates) */
  day: number;
  /** If date is invalid ( to be used in case of padding) */
  isInvalid: boolean;
  /** Is date in selection */
  isSelected: boolean;
  /** Is date in between selection */
  isInBetweenRange: boolean;
  /** Is date date disabled */
  isDisabled: boolean;

}
