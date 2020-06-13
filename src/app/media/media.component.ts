import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
})
export class MediaComponent implements OnInit {
  videos: any[];
  private unsubscribe$: Subject<any> = new Subject();

  constructor(
    private youTubeService: YoutubeService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();

    this.videos = [];
    this.youTubeService
      .getVideosForChanel('UCo70tv8EqEUYOHQXV2_AZQQ', 20)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((lista) => {
        for (let element of lista['items']) {
          this.videos.push(element);
        }
        this.spinner.hide();
      });
  }
}
