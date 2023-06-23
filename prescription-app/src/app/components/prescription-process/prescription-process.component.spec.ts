import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionProcessComponent } from './prescription-process.component';

describe('PrescriptionProcessComponent', () => {
  let component: PrescriptionProcessComponent;
  let fixture: ComponentFixture<PrescriptionProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrescriptionProcessComponent]
    });
    fixture = TestBed.createComponent(PrescriptionProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
