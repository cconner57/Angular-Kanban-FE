import { Component, Input } from '@angular/core';

interface Task {
  id: string;
  title: string;
  detail: string;
}

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task!: Task;
}
