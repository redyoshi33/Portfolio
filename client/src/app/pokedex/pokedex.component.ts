import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  constructor() { }

  
  @Output() BackEventEmitter = new EventEmitter()

  ngOnInit() {
  }

  clickBack(){
	this.BackEventEmitter.emit()
  }
}
