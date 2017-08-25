import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { AccountFormComponent } from '../account/form/form.component';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FirebaseListObservable } from 'angularfire2/database';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  displayName = '';
  accountList: FirebaseListObservable<Account[]>;
  accountBalance = 2300;

  constructor(
    private service: AuthService,
    private accountService: AccountService,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
    this.service.getUser().subscribe( user => {
      this.displayName = user.displayName;
    });

    this.accountList = this.accountService.getAccountList();
  }

  accountFormDialog() {
    this.dialog.open( AccountFormComponent , {
      width: '720px',
      height: '400px'
    });
  }
}
