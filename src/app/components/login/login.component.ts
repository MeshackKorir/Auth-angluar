import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from 'express';
import { User } from '../../Interfaces/user.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router'
// import { User } from 'src/app/interfaces/user';
// import { AuthService } from 'src/app/services/auth.service';
// import { UserService } from 'src/app/services/user.service';


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
export class LoginComponent {

  logInUserForm! : FormGroup
  errorMessage!: string;
  successMessage!: string ;
  loggingIn: boolean = false;
  loggedInState: boolean = false;
  loggedIn: boolean = false;

constructor(private formBuilder: FormBuilder, private router:Router){
  this.logInUserForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });
}

loginUser(){
  if (this.logInUserForm.invalid) {
    return;
  }

  const data = this.logInUserForm.value;

  this.loggingIn = true;
}
  
}
