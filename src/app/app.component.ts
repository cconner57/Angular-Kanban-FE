import { Component } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks: any;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getTask().subscribe({
      next: (response) => (this.tasks = response),
      error: (error) => console.log('error', error),
    });
  }
}
