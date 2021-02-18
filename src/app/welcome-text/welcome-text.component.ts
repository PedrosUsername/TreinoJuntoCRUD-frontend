import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { customers2 } from '../customers2';

@Component({
  selector: 'app-welcome-text',
  templateUrl: './welcome-text.component.html',
  styleUrls: ['./welcome-text.component.css']
})
export class WelcomeTextComponent implements OnInit {
  customers = this.customerService.getCustomers();

  constructor(
    private customerService: CustomerService
  )
  { }

  delCustomer( customer: number ){
    this.customerService.delCustomer( customer );
    window.alert("Usuario excluido");
  }

  ngOnInit(): void {
  }

}
