import { Component, Input } from '@angular/core';
import { RobotPet } from '../../../types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-robot',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './robot.component.html',
  styleUrl: './robot.component.css'
})
export class RobotComponent {
    @Input() robot!: RobotPet;
}
