import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../shared/services/customer.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Customer} from "../../shared/models/customer";

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
    id: number;
    customerForm = new FormGroup( {
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private route: ActivatedRoute,
              private customerService: CustomerService,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('customerId');
    this.customerService.getCustomerById(this.id)
      .subscribe(custFromRest => {
    this.customerForm.patchValue({
      firstName: custFromRest.firstName,
      lastName: custFromRest.lastName,
      address: custFromRest.address
    });
  });
    }

  save() {
    const customer = this.customerForm.value;
    customer.customerId = this.id;
    //evt order
    this.customerService.updateCustomer(customer).subscribe(() => {this.router.navigateByUrl('/customers');});
  }
}
