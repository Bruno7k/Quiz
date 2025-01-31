import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outlined-button',
  imports: [],
  templateUrl: './outlined-button.component.html',
  styleUrl: './outlined-button.component.scss',
})
export class OutlinedButtonComponent {
  @Input() buttonLabel!: string;
  @Input() buttonType: string = 'button';
  @Input() redirectTo?: string;
  @Output() onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor(private router: Router) {}

  handleClick(event: MouseEvent): void {
    if (this.redirectTo) {
      this.router.navigate([this.redirectTo]);
    }
    this.onClick.emit(event);
  }
}
