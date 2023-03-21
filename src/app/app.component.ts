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
    colorTheme: localStorage.getItem('colorTheme') || 'light',
    modal: null,
    modalData: null,
    dataLoaded: false,
  };
  boards: { [index: string]: any } = [
    { id: '0', title: 'Board 1', column: [] },
  ];
  selectedBoard: any = this.boards[0];

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
          this.boards = response;
          this.selectedBoard = this.boards[0];
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
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

  editBoard() {
    console.log('func hit');
    this.settings.modal = 'EditBoard';
  }
}
