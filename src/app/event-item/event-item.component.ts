import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import 'dayjs/locale/en';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css'],
})
export class EventItemComponent implements OnInit {
  @Input() event: any;
  constructor() {}

  ngOnInit(): void {}

  getImageSource(): string {
    return ApiService.BASE_URL + '/static' + this.event.image;
  }

  formatDate(date: string): string {
    let date_obj = dayjs(date).utc().format('MMMM DD, YYYY hh:mm A');
    return date_obj.toString();
  }
}
