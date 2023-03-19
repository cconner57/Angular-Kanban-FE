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

  onClickDefault(e: any) {
    e.stopPropagation();
  }

  closeModal() {
    this.settings.modal = null;
  }
}
