import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  announcements: any[];
  private unsubscribe$: Subject<any> = new Subject();
  constructor(
    private apiService: ApiService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.apiService
      .getAnnouncements()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (announcementsList: any[]) => {
          this.announcements = announcementsList;
          this.spinner.hide();
        },
        (err) => this.spinner.hide()
      );
  }
}
