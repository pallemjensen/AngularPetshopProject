import {Injectable} from '@angular/core';
import {Customer} from "../models/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[];
  id = 1;
  apiUrl = ' http://localhost:5000/api/customer';

  constructor(private http: HttpClient) {
    this.customers = [
      {id: this.id++, firstName: 'John', lastName: 'Hansen', address: 'Summer Street 10'},
      {id: this.id++, firstName: 'Palle', lastName: 'Jensen', address: 'Winter Street 10'}];
  }

  getCustomers(): Observable<Customer[]>
  {
    return this.http.get<Customer[]>( this.apiUrl);
  }

  addCustomer(customer: Customer)
  {
    customer.id = this.id++;
    this.customers.push(customer);
  }

  getCustomerById(id: number)
  {
    return this.customers.find(cust => cust.id === id);
  }

  updateCustomer(customer: Customer)
  {
    const custToUpdate = this.customers.find(cust => customer.id === cust.id);
    const index = this.customers.indexOf(custToUpdate);
    this.customers[index] = customer;
  }

  deleteCustomer(id: number)
  {
    this.customers = this.customers.filter(cust => cust.id !== id);
  }
}
