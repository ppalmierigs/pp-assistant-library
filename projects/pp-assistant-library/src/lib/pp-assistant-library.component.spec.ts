import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpAssistantLibraryComponent } from './pp-assistant-library.component';

describe('PpAssistantLibraryComponent', () => {
  let component: PpAssistantLibraryComponent;
  let fixture: ComponentFixture<PpAssistantLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpAssistantLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PpAssistantLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
