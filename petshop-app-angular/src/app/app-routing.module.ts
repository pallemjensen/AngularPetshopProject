import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {CustomersListComponent} from "./customers/customers-list/customers-list.component";
import {CustomerDetailsComponent} from "./customers/customer-details/customer-details.component";
import {CustomerAddComponent} from "./customers/customer-add/customer-add.component";
import {CustomerUpdateComponent} from "./customers/customer-update/customer-update.component";
import {LoginComponent} from "./Login/login/login.component";
import {AuthGuard} from "./guards/authGuard";

const routes: Routes =[
  { path: 'login', component: LoginComponent },
  {
    path: 'customer-update/:customerId', component: CustomerUpdateComponent, canActivate: [AuthGuard]
  },
  {
    path: 'customer-add', component: CustomerAddComponent, canActivate: [AuthGuard]
  },
  {
    path: 'customers/:customerId', component: CustomerDetailsComponent
  },
  {
    path: 'customers', component: CustomersListComponent
  },
  {
    path: '', component: WelcomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
