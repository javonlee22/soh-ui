import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  newsUrl: string = 'http://localhost:8000/api/news/';
  eventsUrl: string = 'http://localhost:8000/api/events/';

  constructor(private http: HttpClient) {}

  getAnnouncements(): Observable<Object> {
    return this.http.get(this.newsUrl).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getEvents(): Observable<Object> {
    return this.http.get(this.eventsUrl).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
