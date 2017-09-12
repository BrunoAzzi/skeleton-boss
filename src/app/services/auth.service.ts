import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../models/user';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  private auth;

  constructor(
    private afAuth: AngularFireAuth
  ) {
    this.user = afAuth.authState;
    this.auth = afAuth.auth;
  }

  forgetPassword(email) {
      return this.auth.sendPasswordResetEmail(email);
  }

  loginWithEmailAndPassword(email, password) {
      return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  getUser() {
    return this.user;
  }

  updateProfile(user: User) {
    return Promise.all([
      this.auth.currentUser.updateEmail(user.email),
      // this.auth.currentUser.updatePhoneNumber(user.phone),
      this.auth.currentUser.updateProfile({
        displayName: user.name,
        photoURL: user.avatar
      })
    ]);
  }

  isLoggedIn() {
    return this.user.map(data => Boolean(data));
  }
}
