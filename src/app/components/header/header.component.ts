import { Component, Input } from '@angular/core';
import { Board, Settings } from 'src/app/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() settings!: Settings;
  @Input() boardTitle!: string;
}
