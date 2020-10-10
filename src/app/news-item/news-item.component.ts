import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css'],
})
export class NewsItemComponent implements OnInit {
  @Input() announcement: any;
  constructor() {}

  ngOnInit(): void {}

  getImageSource(): string {
    return ApiService.BASE_URL + '/static' + this.announcement.image;
  }
}
