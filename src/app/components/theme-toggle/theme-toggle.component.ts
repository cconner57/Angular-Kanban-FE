import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent {
  @Input() colorTheme!: string;
  @Input() toggleColorTheme!: () => void;

  @Output() changeColorThemeEvent = new EventEmitter<void>();

  changeColorTheme() {
    console.log('func ran');
    this.changeColorThemeEvent.emit();
  }
}
