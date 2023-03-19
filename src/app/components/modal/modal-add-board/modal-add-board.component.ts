import { Component, Input } from '@angular/core';
import { Settings, Board } from 'src/app/interfaces';

@Component({
  selector: 'app-modal-add-board',
  templateUrl: './modal-add-board.component.html',
  styleUrls: ['./modal-add-board.component.scss']
})
export class ModalAddBoardComponent {
  @Input() settings!: Settings;
  @Input() selectedBoard!: Board;

  onClickDefault(e: any) {
    e.stopPropagation();
  }

  closeModal() {
    this.settings.modal = null;
  }
}
