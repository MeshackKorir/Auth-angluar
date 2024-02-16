import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  email: string = '';
  password: string = '';
  
  constructor(private router: Router) { }
  registerUser() {
   
    this.router.navigate(['/login']);
}
}
