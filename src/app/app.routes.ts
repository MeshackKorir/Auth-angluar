import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'Register', component:RegisterComponent },
    { path: 'login', component: LoginComponent },


];
