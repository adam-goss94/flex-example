import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-button',
  templateUrl: './news-button.component.html',
  styleUrls: ['./news-button.component.scss'],
})
export class NewsButtonComponent implements OnInit {
  @Input() text: string = '';
  constructor() {}

  ngOnInit(): void {}
}
