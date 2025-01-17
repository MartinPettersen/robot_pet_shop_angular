import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { ProductCategory } from '../../types';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../components/category/category.component';

@Component({
  selector: 'app-catelog',
  imports: [CommonModule, CategoryComponent],
  templateUrl: './catelog.component.html',
  styleUrl: './catelog.component.css'
})
export class CatelogComponent {
    showRobots = true;
    category: string = "";
    productCatalog: ProductCategory | null = null;

    constructor(
        private productService: ProductsService,
        private route: ActivatedRoute
    ) { }

    toggleRobots() {
        this.showRobots = !this.showRobots;
    }

    ngOnInit(): void {
        console.log("test")
        this.route.params.subscribe(params => {
            this.category = params['category'];

            this.productService.getProducts$().subscribe((products) => {
                console.log('Category:', this.category);
                console.log('Products:', products);
                this.productCatalog = products;
            });
        });
    }
}
