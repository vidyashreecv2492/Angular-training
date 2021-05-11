import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  quantity: number=0;
  disable = true;

  plus(){
    this.quantity++;
    if(this.quantity > 0){
    this.disable = false;
    }
  }

  minus(){
    this.quantity--;
    if(this.quantity <= 0){
     this.disable = true;
    }
  }
}
