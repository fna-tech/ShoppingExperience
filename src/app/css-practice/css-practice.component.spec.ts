import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssPracticeComponent } from './css-practice.component';

describe('CssPracticeComponent', () => {
  let component: CssPracticeComponent;
  let fixture: ComponentFixture<CssPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssPracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
