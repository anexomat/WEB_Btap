import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer, CustomerType } from '../classes/ICustomer';

@Injectable({
    providedIn:'root'
})
export class CustomerService {
    private _url:string='datas/customers.json'
    constructor(private _http:HttpClient){}
    getCustomerTypes():Observable<CustomerType[]>{
        return this._http.get<CustomerType[]>(this._url)
    }
}
