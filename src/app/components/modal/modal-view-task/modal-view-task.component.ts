import { Component, Input } from '@angular/core';
import { Settings } from 'src/app/interfaces/settings';

@Component({
  selector: 'app-modal-view-task',
  templateUrl: './modal-view-task.component.html',
  styleUrls: ['./modal-view-task.component.scss'],
})
export class ModalViewTaskComponent {
  @Input() settings!: Settings;

  showHeaderMenu = false;
  completedSubtasks = 0;

  ngOnInit() {
    this.completedSubtasks =
      this.settings?.modalData?.subTask?.filter(
        (subtask: any) => subtask.finished
      ).length ?? 0;
  }

  onClickDefault(e: any) {
    e.stopPropagation();
  }

  closeModal() {
    this.settings.modal = null;
    this.settings.modalData = null;
  }

  toggleHeaderMenu(action: boolean) {
    this.showHeaderMenu = action;
  }

  openEditTaskModal(e: MouseEvent) {
    e.stopPropagation();
    this.settings.modal = 'EditTask';
  }

  openDeleteModal(e: MouseEvent) {
    e.stopPropagation();
    this.settings.modal = 'DeleteTask';
  }
}
