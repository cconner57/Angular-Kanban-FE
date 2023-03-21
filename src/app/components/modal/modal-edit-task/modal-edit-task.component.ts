import { Component, Input } from '@angular/core';
import { Settings } from 'src/app/interfaces/settings';

@Component({
  selector: 'app-modal-edit-task',
  templateUrl: './modal-edit-task.component.html',
  styleUrls: ['./modal-edit-task.component.scss'],
})
export class ModalEditTaskComponent {
  @Input() settings!: Settings;

  showHeaderMenu = false;
  completedSubtasks = 0;

  ngOnInit() {
    console.log('settings', this.settings);
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

  openDeleteModal() {
    this.settings.modal = 'DeleteTask';
  }
}
