import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipeDiabetesComponent } from './tipe-diabetes.component';

describe('TipeDiabetesComponent', () => {
  let component: TipeDiabetesComponent;
  let fixture: ComponentFixture<TipeDiabetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipeDiabetesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipeDiabetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
