import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../environments/environment';
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
    return environment.apiHost + '/static' + this.announcement.image;
  }
}
