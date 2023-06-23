import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticFormComponent } from './diagnostic-form.component';

describe('DiagnosticFormComponent', () => {
  let component: DiagnosticFormComponent;
  let fixture: ComponentFixture<DiagnosticFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnosticFormComponent]
    });
    fixture = TestBed.createComponent(DiagnosticFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
