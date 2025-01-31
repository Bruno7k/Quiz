import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-primary-input',
  imports: [MatIconModule],
  templateUrl: './primary-input.component.html',
  styleUrl: './primary-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrimaryInputComponent),
      multi: true,
    },
  ],
})
export class PrimaryInputComponent implements ControlValueAccessor {
  @Input() labelTitle!: string;
  @Input() type: string = 'text';
  @Input() placeholder!: string;
  @Input() name: string = '';
  @Input() value?: string;

  isPasswordVisible: boolean = false;
  innerValue: string = '';

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  get inputType(): string {
    return this.type === 'password' && this.isPasswordVisible
      ? 'text'
      : this.type;
  }

  // Funções do ControlValueAccessor
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string): void {
    this.innerValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Lógica para desabilitar o input, se quiser
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.innerValue = target.value;
    this.onChange(this.innerValue);
    this.onTouched();
  }
}
