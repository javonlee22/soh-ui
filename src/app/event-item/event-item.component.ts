import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

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
}
