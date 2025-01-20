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
}
getProducts$(): Observable < RobotPet[] > {
    return this.cart$;
}

addProduct(robot: RobotPet): void {
    const tempCart = this.cart.getValue();
    this.cart.next([...tempCart, robot])
}

//removeProduct(Robot: RobotPet): RobotPet[] {
//    return
//}

}
