import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private userList: FirebaseListObservable<User[]>;
  private currentUser: firebase.User;

  constructor(
    private service: AuthService,
    private db: AngularFireDatabase
  ) {
    this.userList = db.list('/userList');
    service.getUser().subscribe(user => this.currentUser = user);
  }

  getUserList() {
    return this.userList;
  }

  saveUser(user) {
    return this.userList.push(user);
  }

  getCurrentUser(): Observable<User> {
    return this.userList.map(userList => userList.find(user => user.uid === this.currentUser.uid));
  }

  updateUser(user) {
    return this.userList.update(user.$key, user);
  }
}
