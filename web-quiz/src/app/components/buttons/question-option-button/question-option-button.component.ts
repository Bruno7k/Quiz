import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-question-option-button',
  imports: [NgClass],
  templateUrl: './question-option-button.component.html',
  styleUrl: './question-option-button.component.scss',
})
export class QuestionOptionButtonComponent {
  @Input() buttonLabel!: string;
  @Input() buttonType: string = 'button';
  @Input() isTheCorrectAnswer: boolean = false;
  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  isClicked: boolean = false;

  constructor() {}

  handleClick(event: MouseEvent): void {
    this.isClicked = true;
    this.onClick.emit(event);
  }
}
