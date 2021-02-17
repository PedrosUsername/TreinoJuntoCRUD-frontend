import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  customers = Array<{
    usuario: string,
    senha: string,
    cep: string,
    cidade: string
  }>()

  addCustomer( customer: any ) {
    this.customers.push( customer );
  }

  getCustomers() {
    return this.customers;
  }

  delCustomer( nome: string ) {
    this.customers.forEach(( customer, index )=>{
      if( customer.usuario == nome ) this.customers.splice( index, 1 );
   });
  }

}
