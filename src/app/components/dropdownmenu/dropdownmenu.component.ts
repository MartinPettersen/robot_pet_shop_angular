import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductCategory } from '../../../types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dropdownmenu',
  imports: [CommonModule, RouterModule],
  templateUrl: './dropdownmenu.component.html',
  styleUrl: './dropdownmenu.component.css'
})
export class DropdownmenuComponent {
constructor(
        private productService: ProductsService
    ) {}


    productCatalog: ProductCategory | null = null;
    // Object.keys(products)

    ngOnInit(): void {
        this.productService.getProducts$().subscribe((products) => {
            console.log(Object.keys(products));
            this.productCatalog = products
        })
    }

    get productKeys(): string[] {
        return this.productCatalog ? Object.keys(this.productCatalog) : [];
    }
}
