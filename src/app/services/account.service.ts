import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class AccountService {

  list: FirebaseListObservable<Account[]>

  constructor(
    private db: AngularFireDatabase
  ) {
    const queryList = db.list('/account', {
      query: {
        limitToLast: 10,
        orderByKey: true
      }
    });

    this.list = db.list('/account');
  }

  getAccountList() {
    return this.list;
  }

  save(account: Account) {
    return this.list.push(account);
  }

}
