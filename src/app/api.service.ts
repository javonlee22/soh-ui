import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly BASE_URL: string = environment.apiHost;
  private readonly NEWS_URL: string = this.BASE_URL + '/api/news/';
  private readonly EVENTS_URL: string = this.BASE_URL + '/api/events/';

  constructor(private http: HttpClient) {}

  getAnnouncements(): Observable<Object> {
    return this.http.get(this.NEWS_URL).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getEvents(): Observable<Object> {
    return this.http.get(this.EVENTS_URL).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
