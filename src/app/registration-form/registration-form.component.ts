import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  usuario = new FormControl('');
  senha = new FormControl('');
  cep = new FormControl('');
  cidade = new FormControl('');

  constructor(
    private customerService: CustomerService
  ) { }
  ngOnInit(): void {
  }

  addCustomer( ) {
    var customer = {
      id: this.customerService.getCount(),
      usuario: this.usuario.value,
      senha: this.senha.value,
      cep: this.cep.value,
      cidade: this.cidade.value
    };
    console.log(customer);
    window.alert("Novo usuario registrado");
    this.customerService.addCustomer( customer );
  }

}
