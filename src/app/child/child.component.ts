import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() public msg = new EventEmitter();
  constructor() {}
  child() {
    alert('started');
  }
  ngOnInit() {}
}
