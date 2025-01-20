import { Injectable } from '@angular/core';
import { RobotPet } from '../../types';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShoppingcartService {



private cart: BehaviorSubject<RobotPet[]> = new BehaviorSubject<RobotPet[]>([]);

cart$: Observable<RobotPet[]> = this.cart.asObservable();

constructor() {
    console.log(`ShoppingcartService instance created: ${Math.random()}`);
}
getProducts$(): Observable < RobotPet[] > {
    console.log("getting cart in service", this.cart.getValue())
    return this.cart$;
}

addProduct(robot: RobotPet): void {
    console.log("adding robot in service", robot)
    const tempCart = this.cart.getValue();
    const updatedCart = [...tempCart, robot]
    this.cart.next(updatedCart);
    console.log("Cart state after update:", updatedCart);
    console.log("Cart after update:", this.cart.getValue());

}

//removeProduct(Robot: RobotPet): RobotPet[] {
//    return
//}

}
