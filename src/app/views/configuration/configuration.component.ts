import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { MdDialog } from '@angular/material';
import { Company } from '../../models/company';
import { CompanyService } from '../../services/company.service';
import { CompanyFormComponent } from '../../components/company/company.component';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  companyList: FirebaseListObservable<Company[]>;

  constructor(
    private service: CompanyService,
    private dialog: MdDialog,
  ) { }

  ngOnInit() {
    this.companyList = this.service.getCompanyList();
  }

  remove(user) {
    this.companyList.remove(user);
  }

  edit(company: Company) {
    this.dialog.open(CompanyFormComponent, {
      height: '500px',
      width: '600px',
      data: {
        company: company
      }
    });
  }

  addUserDialog() {
    this.dialog.open(CompanyFormComponent, {
      height: '500px',
      width: '600px',
    });
  }

}
