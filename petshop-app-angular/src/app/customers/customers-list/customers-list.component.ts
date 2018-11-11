import {Component, OnInit} from '@angular/core';
import {Customer} from "../../shared/models/customer";

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Customer[] = [];

  constructor() { }

  ngOnInit() {
    this.customers = [
    {id: 1, firstName: 'John', lastName: 'Hansen', address: 'Summer Street 10'},
    {id: 2, firstName: 'Palle', lastName: 'Jensen', address: 'Winter Street 10'}];
  }

  countUpOne()
  {
    this.customers.push({
      id: 3,
      firstName: 'Pia',
      lastName: 'Something',
      address: 'The Moon'
    });
  }

}
