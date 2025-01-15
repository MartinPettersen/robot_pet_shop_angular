import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductCategory } from '../../types';
import { RobotComponent } from "../components/robot/robot.component";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from "../components/category/category.component";
@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrl: './robots.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, RobotComponent, CategoryComponent]
})
export class RobotsComponent {

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
