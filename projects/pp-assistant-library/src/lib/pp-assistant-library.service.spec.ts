import { TestBed } from '@angular/core/testing';

import { PpAssistantLibraryService } from './pp-assistant-library.service';

describe('PpAssistantLibraryService', () => {
  let service: PpAssistantLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PpAssistantLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
