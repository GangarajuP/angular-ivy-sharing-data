import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BheaviourSubService {
  bheavior = new BehaviorSubject('Raju');
  user = this.bheavior.asObservable();
  constructor() {}

  editUser(newUser) {
    this.bheavior.next(newUser);
  }
}
