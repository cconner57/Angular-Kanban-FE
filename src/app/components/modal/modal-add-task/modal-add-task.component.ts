import { Component, Input } from '@angular/core';
import { Settings, Task } from 'src/app/interfaces';

@Component({
  selector: 'app-modal-add-task',
  templateUrl: './modal-add-task.component.html',
  styleUrls: ['./modal-add-task.component.scss'],
})
export class ModalAddTaskComponent {
  @Input() settings!: Settings;

  newTask: Task = {
    id: '001',
    column: 'ToDo',
    subTask: [],
    title: '',
  };

  onClickDefault(e: any) {
    e.stopPropagation();
  }

  closeModal() {
    this.settings.modal = null;
    this.settings.modalData = null;
  }
}
