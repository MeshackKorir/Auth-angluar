import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent,  FormsModule, RouterLink, CommonModule],
  // FormsModule, RouterLink, CommonModule
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


}
