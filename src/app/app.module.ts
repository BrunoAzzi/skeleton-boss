import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginComponent } from './views/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverviewComponent } from './views/overview/overview.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { ResetPasswordComponent } from './views/reset-password/reset-password.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConfigurationComponent } from './views/configuration/configuration.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { UserComponent } from './views/user/user.component';
import { UserService } from './services/user.service';
import { UserFormComponent } from './views/user/form/form.component';
import { LoginWrapperComponent } from './components/login-wrapper/login-wrapper.component';
import { CompanyFormComponent } from './components/company/company.component';
import { CompanyService } from './services/company.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OverviewComponent,
    PageNotFoundComponent,
    ResetPasswordComponent,
    SidebarComponent,
    ConfigurationComponent,
    UserComponent,
    UserFormComponent,
    LoginWrapperComponent,
    CompanyFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxChartsModule,
  ],
  providers: [
    UserService,
    CompanyService,
  ],
  entryComponents: [
    UserFormComponent,
    CompanyFormComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
