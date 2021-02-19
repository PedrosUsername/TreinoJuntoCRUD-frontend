import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-welcome-text',
  templateUrl: './welcome-text.component.html',
  styleUrls: ['./welcome-text.component.css']
})
export class WelcomeTextComponent implements OnInit {
  customers = this.customerService.getCustomersFromApi();
  
  constructor(
    private customerService: CustomerService
  )
  { }

  delCustomer( customer: number ){
    this.customerService.delCustomer( customer );
    window.alert("Usuario excluido");
    this.customers = this.customerService.getCustomersFromApi();
  }

  readCustomer(customer: any){
    var texto = "Usuario: " + customer.usuario + "\nSenha: " + customer.senha + "\nCep: " + customer.cep + "\nCidade: " + customer.cidade;
    window.alert(texto);
  }

  ngOnInit(): void {}

}
