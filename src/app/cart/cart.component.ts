import { ChangeDetectorRef, Component } from '@angular/core';
import { RobotPet } from '../../types';
import { ShoppingcartService } from '../services/shoppingcart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
    cart: RobotPet[] = [];

    constructor(private shoppingcartService: ShoppingcartService, private cdr: ChangeDetectorRef) {

    }

    ngOnInit(): void {
        this.shoppingcartService.getProducts$().subscribe((products) => {
            console.log("Received cart updates:", products);
            this.cart = products;
            this.cdr.detectChanges();
        });
    }

    addRobot(robot: RobotPet): void{
        this.shoppingcartService.addProduct(robot);
    }

}
