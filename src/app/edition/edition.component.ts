import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';


@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {
  id: any;
  usuario = new FormControl('');
  senha = new FormControl('');
  cep = new FormControl('');
  cidade = new FormControl('');

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) { }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const customerIdFromRoute = Number(routeParams.get('customer'));

    this.id = customerIdFromRoute;
  }

  editCustomer( ){
    var customer = {
      id: this.id,
      usuario: this.usuario.value,
      senha: this.senha.value,
      cep: this.cep.value,
      cidade: this.cidade.value
    };
    console.log(customer);
    window.alert("Usuario editado");
    this.customerService.updateCustomer( customer );
  }
}
