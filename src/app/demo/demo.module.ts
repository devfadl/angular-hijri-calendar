
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter, CalendarDateFormatter } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoComponent } from './demo.component';
import { CalendarHijriDateFormatter } from '../hijri-date-formatter.provider';
import { HijriAdapter} from '../hijri-date-adapter.provider';
import { DemoUtilsModule } from '../demo-utils/demo.utils.module';
import { registerLocaleData } from '@angular/common';
import localeArSA from '@angular/common/locales/ar-SA';
// Register the Arabic locale
registerLocaleData(localeArSA);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    DemoUtilsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: function() {
        return new HijriAdapter();
      }
    }, {
        dateFormatter: {
          provide: CalendarDateFormatter,
          useClass: CalendarHijriDateFormatter
        }
      })
  ],
  declarations: [DemoComponent],
  exports: [DemoComponent,DemoUtilsModule]
})
export class DemoModule {}
