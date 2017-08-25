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
import { FabComponent } from './components/fab/fab.component';
import { AccountFormComponent } from './views/account/form/form.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from './material/prime-ng.module';
import { MaterialModule } from './material/material.module';
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OverviewComponent,
    PageNotFoundComponent,
    FabComponent,
    AccountFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PrimeNgModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [ AccountService ],
  entryComponents: [ AccountFormComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
