import { formatDate } from '@angular/common';
import {Injectable} from '@angular/core';
import {CalendarDateFormatterInterface, DateAdapter, DateFormatterParams} from 'angular-calendar';
import moment from 'moment-hijri';

@Injectable()
export class CalendarHijriDateFormatter
  implements CalendarDateFormatterInterface {
  constructor(
    protected dateAdapter: DateAdapter
  ) {}

  /**
   * The month view header week day labels
   */
  public monthViewColumnHeader({ date, locale }: DateFormatterParams): string {
   return moment(date).format('dddd') ;
  }

  /**
   * The month view cell day number
   */
  public monthViewDayNumber({ date, locale }: DateFormatterParams): string {
    return moment(date).iDate();
  }

  /**
   * The month view title
   */
  public monthViewTitle({ date, locale }: DateFormatterParams): string {
    return `${moment(date).format('iDD')} ${moment(date).format('iMMMM')} ${moment(date).format('iYYYY')}`;
  }

  /**
   * The week view header week day labels
   */
  public weekViewColumnHeader({ date, locale }: DateFormatterParams): string {
    return  moment(date).format('dddd') ;
  }

  /**
   * The week view sub header day and month labels
   */
  public weekViewColumnSubHeader({
    date,
    locale
  }: DateFormatterParams): string {
    return  moment(date)
      .format('iD');
  }

  /**
   * The week view title
   */
  public weekViewTitle({
    date,
    locale,
    weekStartsOn,
    excludeDays,
    daysInWeek
  }: DateFormatterParams): string {

    const format = d => {
      return  `${moment(d).format('iDD')} ${moment(d).format('iMMMM')} ${moment(d).format('iYYYY')}`;
    }

    return format(moment(date).startOf('week').toDate()) + ' - ' + format(moment(date).endOf('week').toDate())
  }

  /**
   * The time formatting down the left hand side of the week view
   */
  public weekViewHour({ date, locale }: DateFormatterParams): string {
    return formatDate(date, 'h a', locale);
  }

  /**
   * The time formatting down the left hand side of the day view
   */
  public dayViewHour({ date, locale }: DateFormatterParams): string {
    return formatDate(date, 'h a', locale);
  }

  /**
   * The day view title
   */
  public dayViewTitle({ date, locale }: DateFormatterParams): string {
    //  formatDate(date, 'EEEE, MMMM d ', locale) + moment(date).format('iYYYY');
     return `${moment(date).format('iDD')} ${moment(date).format('iMMMM')} ${moment(date).format('iYYYY')}`;
  }
}
