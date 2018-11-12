import {Injectable} from '@angular/core';
import {Customer} from "../models/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[];
  apiUrl = ' http://localhost:5000/api/customer';

  constructor(private http: HttpClient) {
  }

  getCustomers(): Observable<Customer[]>
  {
    return this.http.get<Customer[]>( this.apiUrl);
  }

  addCustomer(customer: Customer)
  {
    // customer.customerId = this.id++;
    // this.customers.push(customer);
  }

  getCustomerById(id: number): Observable<Customer>
  {
    return this.http.get<Customer>(this.apiUrl + '/' + id);
  }

  updateCustomer(customer: Customer): Observable<Customer>
  {
    return this.http.put<Customer>(this.apiUrl + '/' + customer.customerId, customer)
  }

  deleteCustomer(id: number): Observable<any>
  {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
