import { Component, OnInit } from '@angular/core';
import { Account } from '../../../models/account';
import { SelectItem } from 'primeng/primeng';
import { MdDialog } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';
import { AccountService } from '../../../services/account.service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class AccountFormComponent implements OnInit {

  account: Account;
  typeList: SelectItem[] = [
    { label: 'Conta bancária', value: 'Conta bancária' },
    { label: 'Caixa', value: 'Caixa' },
  ];

  constructor(
    private service: AccountService,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
    this.account = new Account();
  }

  registerAccount() {
    console.log()
    this.service.save(this.account).then(
      data => { this.dialog.closeAll(); },
      error => { alert(error); }
    );
  }

}
