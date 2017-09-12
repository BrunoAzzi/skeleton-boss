import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdSnackBar, MdDialogRef } from '@angular/material';
import { Company } from '../../models/company';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyFormComponent implements OnInit {

  private SUCCESS_MESSAGE = 'Dados da empresa salvos com sucesso.';
  company: Company;

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
    private service: CompanyService,
    private dialogRef: MdDialogRef<CompanyFormComponent>,
    private snackBar: MdSnackBar,
  ) { }

  ngOnInit() {
    this.company = this.data && this.data.company || new Company();
  }

  submit() {
    this.company.logo = 'http://api.adorable.io/avatar/40/' + this.company.name;

    if (this.data && this.data.company) {
      this.updateUser(this.company);
    } else {
      this.saveUser(this.company);
    }
  }

  updateUser(company: Company) {
    this.service.updateComapny(company).then(
      success => this.dialogRef.close(this.SUCCESS_MESSAGE),
      error => this.snackBar.open(error.message, 'Ok', { duration: 4000 })
    );
  }

  saveUser(company: Company) {
    this.service.saveCompany(company).then(
      success => this.dialogRef.close(this.SUCCESS_MESSAGE),
      error => this.snackBar.open(error.message, 'Ok', { duration: 4000 })
    );
  }
}
