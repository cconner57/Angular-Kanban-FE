import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private url = 'https://kanban-be-92ns.onrender.com';

  constructor(private http: HttpClient) {}

  getTask() {
    return this.http.get(this.url);
  }
}
