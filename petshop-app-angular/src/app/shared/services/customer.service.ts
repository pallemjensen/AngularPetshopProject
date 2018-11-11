import {Injectable} from '@angular/core';
import {Customer} from "../models/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [];

  constructor() {
    this.customers = [
      {id: 1, firstName: 'John', lastName: 'Hansen', address: 'Summer Street 10'},
      {id: 2, firstName: 'Palle', lastName: 'Jensen', address: 'Winter Street 10'}];
  }

  getCustomers(): Customer[]
  {
      return this.customers;
  }

  addCustomer(customer: Customer)
  {
      this.customers.push(customer);
  }

  getCustomerById(id: number)
  {
    return this.customers.find(cust => cust.id === id);
  }
}
