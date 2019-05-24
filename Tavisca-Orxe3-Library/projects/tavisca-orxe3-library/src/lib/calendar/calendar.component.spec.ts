import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: DateCalendarComponent;
  let fixture: ComponentFixture<DateCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DateCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
