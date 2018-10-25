import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-strawnimals',
  templateUrl: './strawnimals.component.html',
  styleUrls: ['./strawnimals.component.css']
})
export class StrawnimalsComponent implements OnInit {

  constructor() { }

  @Output() BackEventEmitter = new EventEmitter()

  ngOnInit() {
  }

  clickBack(){
	this.BackEventEmitter.emit()
  }
}
