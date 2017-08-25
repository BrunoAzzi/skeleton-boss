import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithEmailAndPassword(email, password) {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  getUser() {
    return this.user;
  }

  isLoggedIn() {
    return this.user.map(data => Boolean(data));
  }
}
