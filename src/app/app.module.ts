import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// auth
import { fakeBackendProvider } from './-helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';
// import { AuthGuard } from './-guards/auth.guard';
// import { UserService } from './-services/user.service';
// import { AuthenticationService } from '../app/-services/authentication.service';
// packages neccessary for material
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule,
//          MatIconModule, MatSidenavModule, MatGridListModule } from '@angular/material';
// components
// import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BgnrComponent } from './bgnr/bgnr.component';
import { AdvcComponent } from './advc/advc.component';
import { ExprComponent } from './expr/expr.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TaskChooseComponent } from './task-choose/task-choose.component';
// import { TaskLayoutComponent } from './tasks/task-layout/task-layout.component';
// import { Services } from '@angular/core/src/view';

const appRoutes: Routes = [
  { path: '',       component: HomeComponent, pathMatch: 'full' }, // pathMatch: 'full' , canActivate: [AuthGuard] },
  { path: 'login',  component: LoginComponent, pathMatch: 'full' },
  { path: 'bgnr',  component: BgnrComponent, pathMatch: 'full' },
  { path: 'advc',  component: AdvcComponent, pathMatch: 'full' },
  { path: 'expr',  component: ExprComponent, pathMatch: 'full' },
  { path: 'registration',  component: RegistrationComponent, pathMatch: 'full' },
  { path: 'navigation',  component: NavigationComponent, pathMatch: 'full' },
  { path: 'choose', component: TaskChooseComponent, pathMatch: 'full' },
  // { path: 'logout', component: LoginComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BgnrComponent,
    AdvcComponent,
    ExprComponent,
    HomeComponent,
    RegistrationComponent,
    NavigationComponent,
    TaskChooseComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    // BrowserAnimationsModule,
    // MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatGridListModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    // AuthGuard,
    // AuthenticationService,
    // UserService,
    fakeBackendProvider,
    MockBackend,
    // BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
