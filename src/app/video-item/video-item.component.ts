import { Component, OnInit, Input } from '@angular/core';
import { formatDate } from '@angular/common';
const unescape = require('unescape');

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css'],
})
export class VideoItemComponent implements OnInit {
  constructor() {}

  @Input() video: any;

  ngOnInit(): void {}

  escapeHtml(unsafe: string): string {
    return unescape(unsafe);
  }

  convertDate(date: string): string {
    return formatDate(date, 'MMMM dd, yyyy', 'en-US');
  }
}
