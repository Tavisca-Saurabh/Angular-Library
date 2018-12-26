import { TestBed } from '@angular/core/testing';

import { TaviscaOrxe3LibraryService } from './tavisca-orxe3-library.service';

describe('TaviscaOrxe3LibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaviscaOrxe3LibraryService = TestBed.get(TaviscaOrxe3LibraryService);
    expect(service).toBeTruthy();
  });
});
