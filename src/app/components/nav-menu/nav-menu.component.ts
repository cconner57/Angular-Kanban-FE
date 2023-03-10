import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Settings } from 'src/app/interfaces/settings';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent {
  @Output() boardSelected = new EventEmitter();

  @Input() settings!: Settings;
  @Input() selectedBoard!: string;
  @Input() boards!: any;

  onBoardSelected(boardId: string): void {
    this.boardSelected.emit(boardId);
  }

  toggleColorTheme() {
    console.log('selectedBoard', this.selectedBoard);
    this.settings.colorTheme =
      this.settings.colorTheme === 'light' ? 'dark' : 'light';
  }

  toggleMenu() {
    this.settings.navMenuExpanded = !this.settings.navMenuExpanded;
  }
}
