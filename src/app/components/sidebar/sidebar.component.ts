import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';
import * as firebase from 'firebase/app';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  user: Observable<firebase.User>;
  currentUser: Observable<User>;
  company: Observable<Company>;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private companyService: CompanyService,
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.currentUser = this.userService.getCurrentUser();
    this.company = this.companyService.getCurrentCompany();
  }

  logout() {
    this.authService.logout();
  }
}
