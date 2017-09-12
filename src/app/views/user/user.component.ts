import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from '../../services/user.service';
import { MdDialog } from '@angular/material';
import { UserFormComponent } from './form/form.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userList: FirebaseListObservable<User[]>;

  constructor(
    private service: AuthService,
    private userService: UserService,
    private dialog: MdDialog,
  ) { }

  ngOnInit() {
    this.userList = this.userService.getUserList();
  }

  remove(user) {
    this.userList.remove(user);
  }

  edit(user: User) {
    this.dialog.open(UserFormComponent, {
      height: '500px',
      width: '600px',
      data: {
        user: user
      }
    });
  }

  addUserDialog() {
    this.dialog.open( UserFormComponent, {
      height: '500px',
      width: '600px',
    });
  }

}
