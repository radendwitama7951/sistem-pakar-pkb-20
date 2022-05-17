import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesAppComponent } from './features-app.component';

describe('FeaturesAppComponent', () => {
  let component: FeaturesAppComponent;
  let fixture: ComponentFixture<FeaturesAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
