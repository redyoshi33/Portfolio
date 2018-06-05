import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-weeh',
  templateUrl: './weeh.component.html',
  styleUrls: ['./weeh.component.css']
})
export class WeehComponent implements OnInit {

  constructor() { }

  @Output() BackEventEmitter = new EventEmitter()

  ngOnInit() {
  }

  clickBack(){
	this.BackEventEmitter.emit()
  }
}
