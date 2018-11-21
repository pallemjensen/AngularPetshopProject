import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CustomersListComponent} from './customers/customers-list/customers-list.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AppRoutingModule} from './app-routing.module';
import {CustomerDetailsComponent} from './customers/customer-details/customer-details.component';
import {CustomerAddComponent} from './customers/customer-add/customer-add.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {CustomerUpdateComponent} from './customers/customer-update/customer-update.component';
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationService} from "./shared/services/AuthenticationService.service";
import { LoginComponent } from './Login/login/login.component';
import {CustomerService} from "./shared/services/customer.service";
import {AuthGuard} from "./guards/authGuard";

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    NavbarComponent,
    WelcomeComponent,
    CustomerDetailsComponent,
    CustomerAddComponent,
    CustomerUpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthenticationService, AuthGuard, CustomerService],
  bootstrap: [AppComponent],
})
export class AppModule { }
