import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Company } from '../models/company';
import { UserService } from './user.service';

@Injectable()
export class CompanyService {

  private companyList: FirebaseListObservable<Company[]>;
  currentCompany;

  constructor(
    private db: AngularFireDatabase,
    private userService: UserService,
  ) {
    this.companyList = db.list('/companyList');
    this.userService.getCurrentUser().subscribe(user => this.currentCompany = user.company);
  }

  getCompanyList() {
    return this.companyList;
  }

  getCurrentCompany() {
    return this.companyList.map(companyList => companyList.find(company => company.name === this.currentCompany));
  }

  saveCompany(company) {
    return this.companyList.push(company);
  }

  updateComapny(company) {
    return this.companyList.update(company.$key, company);
  }

}
