import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Settings, Board } from 'src/app/interfaces';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss'],
})
export class ModalDeleteComponent {
  @Output() deleteItemEvent = new EventEmitter();

  @Input() settings!: Settings;
  @Input() selectedBoard!: Board;
  @Input() boards!: any;

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

  deleteItem() {
    if (this.settings.modal === 'DeleteBoard') {
      this.deleteItemEvent.emit(['Board', this.selectedBoard]);
    }
    if (this.settings.modal === 'DeleteTask') {
      this.deleteItemEvent.emit(['Task', this.settings.modalData]);
    }
    // this.settings.modalData = null;
    this.closeModal();
  }
}
