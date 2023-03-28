import { Component, Input } from '@angular/core';
import { Settings, Board } from 'src/app/interfaces';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal-edit-board',
  templateUrl: './modal-edit-board.component.html',
  styleUrls: ['./modal-edit-board.component.scss'],
})
export class ModalEditBoardComponent {
  @Input() settings!: Settings;
  @Input() selectedBoard!: Board;

  filteredColumns: any = [];

  editBoardForm = this.fb.group({
    boardName: [''],
    columns: this.fb.array([this.fb.control('')]),
  });

  get columns() {
    return this.editBoardForm.get('columns') as FormArray;
  }

  ngOnInit() {
    this.filteredColumns = this.selectedBoard.column;

    this.editBoardForm.patchValue({
      boardName: this.selectedBoard.title ?? '',
    });

    // this.columns.push(this.filteredColumns);
  }

  constructor(private fb: FormBuilder) {}

  onClickDefault(e: any) {
    e.stopPropagation();
  }

  closeModal() {
    this.settings.modal = null;
  }

  deleteColumn(columnId: string) {
    this.filteredColumns = this.filteredColumns.filter(
      (column: any) => column.id !== columnId
    );
  }

  addColumn() {
    this.columns.push(this.fb.control(''));
  }

  saveChanges() {
    if (this.filteredColumns.length > 0) {
      this.selectedBoard.column = this.filteredColumns;
    }
    if (this.editBoardForm.value.boardName) {
      this.selectedBoard.title = this.editBoardForm.value.boardName;
      this.editBoardForm.reset();
    }
    this.settings.modal = null;
  }
}
