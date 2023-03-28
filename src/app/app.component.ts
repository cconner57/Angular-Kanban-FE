import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Board, Settings } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  settings: Settings = {
    navMenuExpanded: true,
    colorTheme: localStorage.getItem('colorTheme') || 'dark',
    modal: null,
    modalData: null,
    dataLoaded: false,
  };
  boards: Board[] = [
    {
      id: '2',
      title: 'Platform Launch',
      column: [
        {
          id: '0',
          title: 'Todo',
          color: '#00c7fc',
          task: [
            {
              id: '1',
              title: 'Task 1',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
            {
              id: '2',
              title: 'Task 2',
              column: 'Description 2',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
            {
              id: '3',
              title: 'Task 3',
              column: 'Description 3',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
          ],
        },
        {
          id: '1',
          title: 'Doing',
          color: '#96d35f',
          task: [
            {
              id: '4',
              title: 'Task 4',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
            {
              id: '5',
              title: 'Task 5',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
            {
              id: '6',
              title: 'Task 6',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
          ],
        },
        {
          id: '2',
          title: 'Done',
          color: '#874efe',
          task: [
            {
              id: '7',
              title: 'Task 7',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
            {
              id: '8',
              title: 'Task 8',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
            {
              id: '9',
              title: 'Task 9',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
          ],
        },
      ],
    },
    {
      id: '1',
      title: 'Marketing Plan',
      column: [
        {
          id: '0',
          title: 'Todo',
          color: '#49C4E5',
          task: [
            {
              id: '0',
              title: 'Task 1',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
            {
              id: '0',
              title: 'Task 1',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
            {
              id: '0',
              title: 'Task 1',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
          ],
        },
        {
          id: '0',
          title: 'Doing',
          color: '#8471F2',
          task: [
            {
              id: '0',
              title: 'Task 1',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
            {
              id: '0',
              title: 'Task 1',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
            {
              id: '0',
              title: 'Task 1',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
          ],
        },
        {
          id: '0',
          title: 'Done',
          color: '#67E2AE',
          task: [
            {
              id: '0',
              title: 'Task 1',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
            {
              id: '0',
              title: 'Task 1',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
            {
              id: '0',
              title: 'Task 1',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
          ],
        },
      ],
    },
    {
      id: '3',
      title: 'Roadmap',
      column: [
        {
          id: '0',
          title: 'Column 1',
          color: 'red',
          task: [
            {
              id: '0',
              title: 'Task 1',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
            {
              id: '0',
              title: 'Task 1',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
            {
              id: '0',
              title: 'Task 1',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
          ],
        },
        {
          id: '0',
          title: 'Column 1',
          color: 'red',
          task: [
            {
              id: '0',
              title: 'Task 1',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
            {
              id: '0',
              title: 'Task 1',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
            {
              id: '0',
              title: 'Task 1',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
          ],
        },
        {
          id: '0',
          title: 'Column 1',
          color: 'red',
          task: [
            {
              id: '0',
              title: 'Task 1',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
            {
              id: '0',
              title: 'Task 1',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
            {
              id: '0',
              title: 'Task 1',
              column: 'Description 1',
              subTask: [{ id: '0', description: 'Subtask 1', finished: false }],
            },
          ],
        },
      ],
    },
  ];
  selectedBoard: Board = this.boards[0];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService
      .getTask()
      .pipe(
        catchError((error) => {
          console.error(error);
          return of(null);
        })
      )
      .subscribe({
        next: (response) => {
          if (!response) return;
          console.log('res', response);
          // this.boards = [response];
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          // this.selectedBoard = this.boards[0];
          console.log('complete');
        },
      });
  }

  onBoardSelected(boardId: any) {
    const filteredBoard = this.boards['filter'](
      (board: Board) => board.id === boardId.id
    )[0];
    this.selectedBoard = filteredBoard;
  }

  closeModal() {
    this.settings.modal = null;
    this.settings.modalData = null;
  }

  deleteItem(item: [string, any]) {
    if (item[0] === 'Board') {
      this.boards = this.boards.filter(
        (board: Board) => board.id !== item[1].id
      );
      this.selectedBoard = this.boards[0];
      return;
    }
    if (item[0] === 'Task') {
      const filteredTask = this.selectedBoard.column.map((column: any) => {
        column.task = column.task.filter((task: any) => task.id !== item[1].id);
        return column;
      });
      this.selectedBoard.column = filteredTask;
    }
  }

  changeColor(column: any, event: any) {
    this.selectedBoard.column = this.selectedBoard.column.map((item: any) => {
      if (item.id === column.id) {
        item.color = column.color = event.target.value;
      }
      return item;
    });
  }

  editBoard() {
    this.settings.modal = 'EditBoard';
  }
}
