import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTask() {
    return this.http.get(this.url).pipe(first());
  }
}