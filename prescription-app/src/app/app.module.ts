import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DocumentComponent } from './components/document/document.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component';
import { DoctorFormComponent } from './components/doctor-form/doctor-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { OperatorFormComponent } from './components/operator-form/operator-form.component';
import { PrescriptionFormComponent } from './components/prescription-form/prescription-form.component';
import { DiagnosticFormComponent } from './components/diagnostic-form/diagnostic-form.component';
import { PrescriptionViewComponent } from './components/prescription-view/prescription-view.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { PrescriptionProcessComponent } from './components/prescription-process/prescription-process.component';
import { MDBBootstrapModule, ModalModule } from 'angular-bootstrap-md';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DocumentComponent,
    SearchComponent,
    DoctorFormComponent,
    UserFormComponent,
    OperatorFormComponent,
    PrescriptionFormComponent,
    DiagnosticFormComponent,
    PrescriptionViewComponent,
    OrderFormComponent,
    LoginComponent,
    ResetPasswordComponent,
    PrescriptionProcessComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    MdbCheckboxModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
