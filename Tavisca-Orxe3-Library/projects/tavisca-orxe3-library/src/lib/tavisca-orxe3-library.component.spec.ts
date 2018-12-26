import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaviscaOrxe3LibraryComponent } from './tavisca-orxe3-library.component';

describe('TaviscaOrxe3LibraryComponent', () => {
  let component: TaviscaOrxe3LibraryComponent;
  let fixture: ComponentFixture<TaviscaOrxe3LibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaviscaOrxe3LibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaviscaOrxe3LibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
