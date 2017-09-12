import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { OverviewComponent } from './views/overview/overview.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AuthService } from './services/auth.service';
import { ResetPasswordComponent } from './views/reset-password/reset-password.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConfigurationComponent } from './views/configuration/configuration.component';
import { UserComponent } from './views/user/user.component';
import { LoginWrapperComponent } from './components/login-wrapper/login-wrapper.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'overview', pathMatch: 'full'
  },
  {
    path: '', component: SidebarComponent, canActivate: [ AuthGuard ], children: [
      {
        path: 'overview', component: OverviewComponent
      },
      {
        path: 'settings', component: ConfigurationComponent
      },
      {
        path: 'user-list', component: UserComponent
      },
    ]
  },
  {
    // TODO make a resolve here, preventin loggedin userList to access this
    path: '', component: LoginWrapperComponent, children: [
      {
        path: 'reset-password', component: ResetPasswordComponent
      },
      {
        path: 'login', component: LoginComponent
      },
    ]
  },
  {
    path: '**', component: PageNotFoundComponent, pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AppRoutingModule { }
