import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingMachineComponent } from './training-machine.component';

describe('TrainingMachineComponent', () => {
  let component: TrainingMachineComponent;
  let fixture: ComponentFixture<TrainingMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingMachineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
