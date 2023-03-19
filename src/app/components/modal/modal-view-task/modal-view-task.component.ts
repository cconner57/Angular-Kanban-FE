import { Component, Input } from '@angular/core';
import { Settings } from 'src/app/interfaces/settings';

@Component({
  selector: 'app-modal-view-task',
  templateUrl: './modal-view-task.component.html',
  styleUrls: ['./modal-view-task.component.scss']
})
export class ModalViewTaskComponent {
  @Input() settings!: Settings;

  showHeaderMenu = false;

  onClickDefault(e: any) {
    e.stopPropagation();
  }

  closeModal() {
    this.settings.modal = null;
  }

  toggleHeaderMenu(action: boolean) {
    this.showHeaderMenu = action;
  }

  openEditBoardModal() {
    this.settings.modal = 'EditBoard';
  }

  openDeleteModal() {
    this.settings.modal = 'DeleteBoard';
  }
}
