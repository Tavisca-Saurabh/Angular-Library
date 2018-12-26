import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaviscaButtonComponent } from './tavisca-button.component';

describe('TaviscaButtonComponent', () => {
  let component: TaviscaButtonComponent;
  let fixture: ComponentFixture<TaviscaButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaviscaButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaviscaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
