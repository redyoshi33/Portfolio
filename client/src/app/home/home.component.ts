import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
	
export class HomeComponent implements OnInit {

  showcom = true;
  game = false;
  poke = false;
  weeh = false;

  constructor() { }

  ngOnInit() {
  }

  clickDetail24() {
    this.showcom = false
    this.game = true
  }
  clickDetailPoke(){
    this.showcom = false
    this.poke = true
  }
  clickDetailWEEH(){
    this.showcom = false
    this.weeh = true
  }
  switchBack(){
    this.showcom = true
    this.game = false
    this.poke = false
    this.weeh = false
  }

}
