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

  completedSubtasks = 0;

  ngOnInit() {
    this.completedSubtasks =
      this.task?.subTask?.filter(
        (subtask: any) => subtask.finished
      ).length ?? 0;
  }

  viewTask() {
    this.settings.modal = 'ViewTask';
    this.settings.modalData = this.task;
  }
}
