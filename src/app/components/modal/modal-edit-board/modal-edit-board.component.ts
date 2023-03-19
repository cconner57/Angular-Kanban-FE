import { Component, Input } from '@angular/core';
import { Settings, Board } from 'src/app/interfaces';

@Component({
  selector: 'app-modal-edit-board',
  templateUrl: './modal-edit-board.component.html',
  styleUrls: ['./modal-edit-board.component.scss'],
})
export class ModalEditBoardComponent {
  @Input() settings!: Settings;
  @Input() selectedBoard!: Board;

  onClickDefault(e: any) {
    e.stopPropagation();
  }

  closeModal() {
    this.settings.modal = null;
  }
}
