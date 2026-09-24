import { Component, signal } from '@angular/core';
import { CustomerService } from '../services/customer-service';
import { Customer, CustomerType } from '../classes/ICustomer';

@Component({
  selector: 'app-customer-list-component',
  standalone: false,
  styleUrl: './customer-list-component.css',
  templateUrl: './customer-list-component.html',
})
export class CustomerListComponent {
  customer_types=signal<CustomerType[]>([]);
  constructor(private _service:CustomerService){}
  ngOnInit():void{
    this._service.getCustomerTypes().subscribe({
      next:(data)=> //"=>":lamda expression
      {
        this.customer_types.set(data);
      },
      error:(err)=>
      {
        console.log("Error" + JSON.stringify(err))
      }
    }
  )
  }
}
