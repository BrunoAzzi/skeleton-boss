import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  user;
  isLoggedIn = false;
  returnUrl = '/';

  password: string;
  email: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AuthService,
    private snackBar: MdSnackBar,
  ) { }

  ngOnInit() {
    this.service.getUser().subscribe(user => {
      this.isLoggedIn = Boolean(user);
      this.user = user;
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginEmailAndPassword() {
    this.service.loginWithEmailAndPassword(this.email, this.password).then(
      success => {
        this.router.navigateByUrl(this.returnUrl);
      },
      error => {
        this.snackBar.open(error.message, 'Ok', { duration: 4000 });
      }
    );
  }


}
