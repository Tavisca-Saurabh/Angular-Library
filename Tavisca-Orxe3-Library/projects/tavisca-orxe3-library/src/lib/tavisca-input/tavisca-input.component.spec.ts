import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaviscaInputComponent } from './tavisca-input.component';

describe('TaviscaInputComponent', () => {
  let component: TaviscaInputComponent;
  let fixture: ComponentFixture<TaviscaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaviscaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaviscaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
