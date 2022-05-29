import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialGridComponent } from './tutorial-grid.component';

describe('TutorialGridComponent', () => {
  let component: TutorialGridComponent;
  let fixture: ComponentFixture<TutorialGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
