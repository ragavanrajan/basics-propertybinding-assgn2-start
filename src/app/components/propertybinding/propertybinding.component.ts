import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {
  userName: string;

  constructor() { }

  ngOnInit() {

  }
  onUserName() {
    this.userName = '';
  }
}
