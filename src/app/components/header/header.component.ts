import { Component, Input } from '@angular/core';
import { Settings } from 'src/app/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() settings!: Settings;
  @Input() boardTitle!: string;
  @Input() boardColumns!: number;

  showHeaderMenu = false;

  toggleHeaderMenu(action: boolean) {
    this.showHeaderMenu = action;
  }

  openEditBoardModal() {
    this.settings.modal = 'EditBoard';
  }

  openDeleteModal() {
    this.settings.modal = 'DeleteBoard';
  }

  addTask() {
    this.settings.modal = 'AddTask';
  }
}
