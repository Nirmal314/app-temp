import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacklistComponent } from './feedbacklist.component';

describe('FeedbacklistComponent', () => {
  let component: FeedbacklistComponent;
  let fixture: ComponentFixture<FeedbacklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbacklistComponent]
    });
    fixture = TestBed.createComponent(FeedbacklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
