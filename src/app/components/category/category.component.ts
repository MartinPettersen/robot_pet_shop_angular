import { Component, Input } from '@angular/core';
import { RobotPet } from '../../../types';
import { CommonModule } from '@angular/common';
import { RobotComponent } from "../robot/robot.component";

@Component({
  selector: 'app-category',
  imports: [CommonModule, RobotComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
    @Input() categoryLabel!: string;
    @Input() category!: RobotPet[];

}
