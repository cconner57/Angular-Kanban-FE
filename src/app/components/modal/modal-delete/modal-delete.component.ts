import { Component, Input } from '@angular/core';
import { Settings, Board } from 'src/app/interfaces';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss'],
})
export class ModalDeleteComponent {
  @Input() settings!: Settings;
  @Input() selectedBoard!: Board;

  deleteTitle = '';
  deleteWarning = '';

  ngOnInit() {
    this.deleteTitle =
      this.settings.modal === 'DeleteBoard'
        ? `"${this.selectedBoard?.title}" board?`
        : `"${this.settings.modalData?.title}" task and its subtasks?`;

    this.deleteWarning =
      this.settings.modal === 'DeleteBoard'
        ? 'will remove all columns and cannot be reversed.'
        : 'cannot be reversed.';
  }

  onClickDefault(e: any) {
    e.stopPropagation();
  }

  closeModal() {
    this.settings.modal = null;
  }
}
