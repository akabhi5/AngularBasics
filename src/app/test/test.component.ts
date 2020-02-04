import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-test',
  template: `<h2>
              welcome {{ name }}
            </h2>
            <h2>{{ 2+2 }}</h2>
            <h2>{{ "Welcome " + name }}</h2>
            <h2>{{ name.length }}</h2>
            <h2>{{ name.toUpperCase() }}</h2>
            <h2>{{ greetUser() }}</h2>
            <h2>{{ siteUrl }}</h2>
            <input [id]="siteId" type="text" value="Abhishek">
            <input [disabled]="isDisabled" type="text" value="Abhishek">
            <br>
            <button (click)="onClick($event)">Greet</button>
            <br>
            {{ greeting }}
            <input #myInput type="text" />
            <button (click)="logMessage(myInput.value)">Log</button>
            <br><br>
            <input [(ngModel)]="name_ng" type="text" />
            {{ name_ng }}
            <br>
            <h2>{{ "Hello " + parentData }}</h2>
            `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Abhishek";
  public siteUrl = window.location.href;
  public myId = "testId";
  public isDisabled = true;
  public greeting = "";

  public name_ng = "";

  @Input() public parentData;

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hello " + this.name;
  }

  onClick(event) {
    console.log(event);
    this.greeting = "welcome to angular tuts";
  }

  logMessage(value) {
    console.log(value);
  }
}
