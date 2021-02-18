import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  counter = 0;
  customers = Array<{
    id: number,
    usuario: string,
    senha: string,
    cep: string,
    cidade: string
  }>()

  addCustomer( customer: any ) {
    this.customers.push( customer );
    this.counter += 1;
  }

  getCount() {
    return this.counter;
  }
  getCustomers() {
    return this.customers;
  }

  delCustomer( customer: number ) {
    this.customers.forEach(( element, index )=>{
      if( element.id == customer ) this.customers.splice( index, 1 );
   });
  }

}
