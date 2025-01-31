import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionOptionButtonComponent } from './question-option-button.component';

describe('QuestionOptionButtonComponent', () => {
  let component: QuestionOptionButtonComponent;
  let fixture: ComponentFixture<QuestionOptionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionOptionButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionOptionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
