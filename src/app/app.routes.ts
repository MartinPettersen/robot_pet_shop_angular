import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RobotsComponent } from './robots/robots.component';
import { RobotPageComponent } from './robot-page/robot-page.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'robots',
        component: RobotsComponent
    },
    {
        path: 'robot/:category/:productID',
        component: RobotPageComponent
    }
];
