import { Component, Input } from '@angular/core';
import { Task, Settings } from '../../interfaces';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task: Task | undefined;
  @Input() settings!: Settings;
}
