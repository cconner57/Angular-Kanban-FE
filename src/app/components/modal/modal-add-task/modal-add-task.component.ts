import { Component, Input } from '@angular/core';
import { Settings } from 'src/app/interfaces/settings';

@Component({
  selector: 'app-modal-add-task',
  templateUrl: './modal-add-task.component.html',
  styleUrls: ['./modal-add-task.component.scss']
})
export class ModalAddTaskComponent {
  @Input() settings!: Settings;
}
