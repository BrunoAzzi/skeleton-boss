import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { OverviewComponent } from './views/overview/overview.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'overview', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'overview', component: OverviewComponent, canActivate: [ AuthGuard ]
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
