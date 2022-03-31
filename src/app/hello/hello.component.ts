import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  title: string = '';
  message: string = '';
  count: number = 0;
  text: string = '';

  constructor() {}

  ngOnInit(): void {
    this.title = 'Hello-app';
    this.message = '※ボタンをクリック！';
    this.count = 0;
  }

  doClick() {
    this.message = ++this.count + "回、クリックしました。";
  }
}
