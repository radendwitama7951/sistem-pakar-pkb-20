import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosaDiabetesComponent } from './diagnosa-diabetes.component';

describe('DiagnosaDiabetesComponent', () => {
  let component: DiagnosaDiabetesComponent;
  let fixture: ComponentFixture<DiagnosaDiabetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosaDiabetesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosaDiabetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
