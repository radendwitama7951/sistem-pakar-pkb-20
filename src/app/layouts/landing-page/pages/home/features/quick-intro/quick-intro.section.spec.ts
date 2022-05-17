import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickIntroSection } from './quick-intro.section';

describe('QuickIntroSection', () => {
  let component: QuickIntroSection;
  let fixture: ComponentFixture<QuickIntroSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickIntroSection ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickIntroSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
