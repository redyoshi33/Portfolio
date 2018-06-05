import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-twentyfourgame',
  templateUrl: './twentyfourgame.component.html',
  styleUrls: ['./twentyfourgame.component.css']
})
export class TwentyfourgameComponent implements OnInit {
  constructor() { }

  @Output() BackEventEmitter = new EventEmitter()

  ngOnInit() {
  }

  clickBack(){
	this.BackEventEmitter.emit()
  }
}
