import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  title: string;
  message: string;

  constructor() {
    this.title = 'Hello-app';
    this.message = 'This is My First Component!!';
  }

  ngOnInit(): void {
  }

}
