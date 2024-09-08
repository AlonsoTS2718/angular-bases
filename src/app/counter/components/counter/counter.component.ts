import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <hr>
    <h2>{{title}}:</h2>
    <p>counter: {{ counter }}</p>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
    `
})
export class CounterComponent {
  public title = 'Contador';
  public counter: number = 5;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
