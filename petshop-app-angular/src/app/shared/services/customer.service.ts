import {Injectable} from '@angular/core';
import {Customer} from "../models/customer";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationService} from "./AuthenticationService.service";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[];
  apiUrl = ' http://localhost:5000/api/customer';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  getCustomers(): Observable<Customer[]>
  {
    return this.http.get<Customer[]>( this.apiUrl);
  }

  addCustomer(customer: Customer): Observable<Customer>
  {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.post<Customer>( this.apiUrl, customer, httpOptions);
  }

  getCustomerById(id: number): Observable<Customer>
  {
    return this.http.get<Customer>(this.apiUrl + '/' + id);
  }

  updateCustomer(customer: Customer): Observable<Customer>
  {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.put<Customer>(this.apiUrl + '/' + customer.customerId, customer, httpOptions);
  }

  deleteCustomer(id: number): Observable<any>
  {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.delete(this.apiUrl + '/' + id, httpOptions);
  }
}
