import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  email: string;

  constructor(
    private service: AuthService,
    private snackBar: MdSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  resetPassword() {
    this.service.forgetPassword(this.email).then(
      success => { this.router.navigate(['/']); },
      error => { this.snackBar.open(error.message, 'Ok', { duration: 4000 }); }
    );
  }

}
