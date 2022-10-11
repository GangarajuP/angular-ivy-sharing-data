import { Component, OnInit } from '@angular/core';
import { BheaviourSubService } from '../bheaviour-sub.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  parentMessage = 'from parent';
  fromChild: string;
  user;
  newUser;
  constructor(private behaviorSub:BheaviourSubService) {}

  ngOnInit() {
   this.behaviorSub.user.subscribe(user => this.user = user)
  }
  recvfromChild($event) {
    this.fromChild = $event;
  }
  editUser(data){
    this.behaviorSub.editUser(this.newUser)
  }
}
