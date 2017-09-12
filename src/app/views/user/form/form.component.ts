import { Component, Inject, OnInit } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef, MdSnackBar } from '@angular/material';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Company } from '../../../models/company';
import { CompanyService } from '../../../services/company.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class UserFormComponent implements OnInit {
  private SUCCESS_MESSAGE = 'Dados do usuário salvos com sucesso.';

  accessTypeList = [
    { label: 'Admnistrador', value: 'admin' },
    { label: 'Regular', value: 'regular' }
  ];

  user: User;
  currentUser: Observable<User>;
  companyList: FirebaseListObservable<Company[]>;


  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
    private dialogRef: MdDialogRef<UserFormComponent>,
    private snackBar: MdSnackBar,
    private userService: UserService,
    private companyService: CompanyService,
  ) { }

  ngOnInit() {
    this.user = this.data && this.data.user || new User();
    this.currentUser = this.userService.getCurrentUser();
    this.currentUser.subscribe(currentUser => {
      if (currentUser.company !== 'senai') {
        this.user.company = currentUser.company;
      }
    });

    this.companyList = this.companyService.getCompanyList();
  }

  submit() {
    this.user.avatar = 'http://api.adorable.io/avatar/40/' + this.user.email;

    if (this.user.uid) {
      this.updateUser(this.user);
    } else {
      this.saveUser(this.user);
    }
  }

  updateUser(user: User) {
    this.userService.updateUser(user).then(
      success => this.dialogRef.close(this.SUCCESS_MESSAGE),
      error => this.snackBar.open(error.message, 'Ok', { duration: 4000 })
    );
  }

  saveUser(user: User) {
    this.userService.saveUser(user).then(
      success => this.dialogRef.close(this.SUCCESS_MESSAGE),
      error => this.snackBar.open(error.message, 'Ok', { duration: 4000 })
    );
  }
}
