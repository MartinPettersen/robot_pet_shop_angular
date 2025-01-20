import { Injectable } from '@angular/core';
import { RobotPet } from '../../types';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShoppingcartService {


private cartKey = "shoppingCart"
private cart: BehaviorSubject<RobotPet[]>;

cart$: Observable<RobotPet[]>;

constructor() {
    console.log(`ShoppingcartService instance created: ${Math.random()}`);
    const savedCart = JSON.parse(localStorage.getItem(this.cartKey) || '[]')
    this.cart = new BehaviorSubject<RobotPet[]>(savedCart);
    this.cart$ = this.cart.asObservable();

}
getProducts$(): Observable < RobotPet[] > {
    console.log("getting cart in service", this.cart.getValue())
    return this.cart$;
}

addProduct(robot: RobotPet): void {
    console.log("adding robot in service", robot)
    const updatedCart = [...this.cart.getValue(), robot];
    this.cart.next(updatedCart);
    localStorage.setItem(this.cartKey, JSON.stringify(updatedCart))

    //const tempCart = this.cart.getValue();
    //const updatedCart = [...tempCart, robot]
    //this.cart.next(updatedCart);
    console.log("Cart state after update:", updatedCart);
    console.log("Cart after update:", this.cart.getValue());

}

//removeProduct(Robot: RobotPet): RobotPet[] {
//    return
//}

}
