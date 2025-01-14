import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RobotsComponent } from './robots/robots.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'robots',
        component: RobotsComponent
    }
];
