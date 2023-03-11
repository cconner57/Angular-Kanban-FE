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
  @Input() selectedBoard: any = { id: '0', name: 'Board 1' };
  @Input() boards: any = [{ id: '0', name: 'Board 1' }];

  onBoardSelected(boardId: string): void {
    try {
      const filteredBoard = this.boards.filter(
        (item: any) => boardId === item.id
      )[0];
      this.boardSelected.emit(filteredBoard);
    } catch (e) {
      console.error('Error selecting board', e);
    }
  }

  toggleColorTheme() {
    this.settings.colorTheme =
      this.settings.colorTheme === 'light' ? 'dark' : 'light';
  }

  toggleMenu() {
    this.settings.navMenuExpanded = !this.settings.navMenuExpanded;
  }
}
