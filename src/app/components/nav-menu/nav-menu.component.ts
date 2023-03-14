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
  @Input() selectedBoard: any = { id: '0', title: 'Board 1' };
  @Input() boards: any = [{ id: '0', title: 'Board 1' }];

  onBoardSelected(activeBoard: string): void {
    try {
      this.boardSelected.emit(activeBoard);
    } catch (e) {
      console.error('Error selecting board', e);
    }
  }

  createNewBoard() {
    const newBoard = {
      id: Math.floor(Math.random() * 10),
      title: 'New Board',
      column: [],
    };
    this.boards.push(newBoard);
    this.boardSelected.emit(newBoard);
  }

  toggleMenu() {
    this.settings.navMenuExpanded = !this.settings.navMenuExpanded;
  }
}
