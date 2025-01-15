import { Component, Input } from '@angular/core';
import { RobotPet } from '../../../types';

@Component({
  selector: 'app-robot',
  imports: [],
  standalone: true,
  templateUrl: './robot.component.html',
  styleUrl: './robot.component.css'
})
export class RobotComponent {
    @Input() robot!: RobotPet;
}
