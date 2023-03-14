import { Component, Input } from '@angular/core';
import { Settings } from 'src/app/interfaces/settings';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent {
  @Input() settings!: Settings;
  @Input() colorTheme!: string;
  @Input() toggleColorTheme!: () => void;

  changeColorTheme() {
    this.settings.colorTheme =
      this.settings.colorTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('colorTheme', this.settings.colorTheme);
  }
}
