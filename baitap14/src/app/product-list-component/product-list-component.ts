import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogService } from '../services/catalog-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports:[CommonModule],
  styleUrl: './product-list-component.css',
  templateUrl: './product-list-component.html',
})
export class ProductListComponent {
  public products:any 
  constructor(pservice: CatalogService,private router:Router){ 
  this.products=pservice.getCategories() 
  } 
}
