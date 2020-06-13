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
    // return unsafe
    //   .replace(/&amp;/g, '&')
    //   .replace(/&lt;/g, '<')
    //   .replace(/&gt;/g, '>')
    //   .replace(/&quot;/g, '"')
    //   .replace(/&#039;/g, "'");
    return unescape(unsafe);
  }

  convertDate(date: string): string {
    return formatDate(date, 'MMMM dd, yyyy', 'en-US');
  }
}
