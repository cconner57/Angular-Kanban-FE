import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Boards, Board } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  settings = {
    navMenuExpanded: true,
    colorTheme: 'dark',
  };
  boards: { [index: string]: any } = {};
  selectedBoard: string = '0';

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
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          console.log('complete');
        },
      });
  }

  onBoardSelected(boardId: string) {
    const filteredBoard = this.boards['filter']((board: Board) => board.id === boardId)[0];
    this.selectedBoard = filteredBoard;
  }
}
