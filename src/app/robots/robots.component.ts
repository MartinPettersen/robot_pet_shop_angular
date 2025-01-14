import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrl: './robots.component.css'
})
export class RobotsComponent {

    constructor(
        private productService: ProductsService
    ) {}

    ngOnInit(): void {
        this.productService.getProducts$().subscribe((products) => {
            if (products && products['Avian']) {
                console.log("test")
                console.log(products['Avian']);
                
            } else {
                console.error('Avian category not found in products');
            }
        })
    }

}
