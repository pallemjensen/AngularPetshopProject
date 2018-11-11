import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../shared/services/customer.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  customerForm = new FormGroup( {
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  save()
  {
    this.customerService.addCustomer({
      id: 3,
      firstName: 'Sue',
      lastName: 'Poulsen',
      address: 'Sunny Vale'
    });
  }
}
