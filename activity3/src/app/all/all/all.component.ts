import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [
    {'Id':1,'Name':'Abhishek','Location':'Bangalore'},
    {'Id':2,'Name':'Bhavya','Location':'Bangalore'},
    {'Id':3,'Name':'Deepa','Location':'Hyderbad'},
    {'Id':4,'Name':'Kiran','Location':'Bangalore'},
    {'Id':5,'Name':'Neha','Location':'Hyderbad'},

  ]

}
