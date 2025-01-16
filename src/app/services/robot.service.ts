import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductCategory, RobotPet } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class RobotService {

constructor(private http: HttpClient) { }

 getRobot$(robotID: string, category: string): Observable<RobotPet | undefined>{

    return this.http.get<ProductCategory>('assets/database.json').pipe(
        map((catalog: ProductCategory) => {
            const robotCategory = catalog[category] as RobotPet[];
            return robotCategory?.find((robot) => robot.tittel === robotID)
        })
    )

 }
}
