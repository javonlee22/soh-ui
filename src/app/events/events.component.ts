import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: any[];
  private unsubscribe$: Subject<any> = new Subject();
  constructor(
    private apiService: ApiService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.apiService
      .getEvents()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (eventsList: any[]) => {
          this.events = eventsList;
          this.spinner.hide();
        },
        (err) => {
          console.log(err);
          this.spinner.hide();
        }
      );
  }
}
