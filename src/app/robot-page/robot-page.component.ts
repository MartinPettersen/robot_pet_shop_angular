import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RobotService } from '../services/robot.service';
import { RobotPet } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-robot-page',
  imports: [CommonModule],
  templateUrl: './robot-page.component.html',
  styleUrl: './robot-page.component.css'
})
export class RobotPageComponent implements OnInit {
    productID: string | null = null;
    category: string | null = null;
    robot: RobotPet | null = null;

    constructor(private route: ActivatedRoute, private robotService: RobotService) { }

    ngOnInit(): void {
      this.productID = this.route.snapshot.paramMap.get('productID');
      this.category = this.route.snapshot.paramMap.get('category');

        this.robotService.getRobot$(this.productID!, this.category!).subscribe({
            next: (robot) => {
                this.robot = robot || null;
                console.log(robot)
            },
            error: (err) => {
                console.error("could not find robot", err);
            }
        })

      console.log('Product ID:', this.productID);
    }
  }
