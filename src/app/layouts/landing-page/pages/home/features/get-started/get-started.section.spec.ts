import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartedSection } from './get-started.section';

describe('GetStartedSection', () => {
  let component: GetStartedSection;
  let fixture: ComponentFixture<GetStartedSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetStartedSection ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetStartedSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
