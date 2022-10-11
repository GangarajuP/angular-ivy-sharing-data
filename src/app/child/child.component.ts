import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {
  @Input() childMessag;
  @Output() snedMessage = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }
  sendData(){
    this.snedMessage.emit("From Child")
  }

}