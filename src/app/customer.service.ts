import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Customer } from  './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private apiService: ApiService) {}

  customers = Array<Customer>();

  addCustomer( customer: any ) {
    this.apiService.createCustomer(customer).subscribe((customer: Customer)=>{
      console.log("created, ", customer);
    });
  }

  updateCustomer(customer: Customer) {
    this.apiService.updateCustomer(customer).subscribe((cliente: Customer)=>{
      console.log("Policy updated" , cliente);
    });
  }

  getCustomersFromApi() {
    return this.apiService.readCustomers();
  }
  getCustomers(){
    return this.customers;
  }

  delCustomer( customer: number ) {
    this.apiService.deleteCustomer(customer).subscribe((cliente: Customer)=>{
      console.log("Policy deleted, ", cliente);
    });
  }

}
