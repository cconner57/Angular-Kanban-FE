import { Component, Input } from '@angular/core';
import { Settings } from 'src/app/interfaces/settings';

@Component({
  selector: 'app-modal-edit-task',
  templateUrl: './modal-edit-task.component.html',
  styleUrls: ['./modal-edit-task.component.scss']
})
export class ModalEditTaskComponent {
  @Input() settings!: Settings;
}
