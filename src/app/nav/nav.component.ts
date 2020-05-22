import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.highlightNav('ul li a', 'home', 'active');
  }

  highlightNav(elem: string, home: string, active: string): void {
    let url = location.href.split('/');
    let loc = url.pop();
    let links = document.querySelectorAll(elem);
    links.forEach((link) => {
      let path = link.getAttribute('href').split('/').pop();
      if (path === loc) link.setAttribute('class', 'active');
    });
  }
}
