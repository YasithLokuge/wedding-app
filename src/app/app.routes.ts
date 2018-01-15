import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent }
];

export const approutes = RouterModule.forRoot(APP_ROUTES);
