// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthenticationService } from '../../services/authentication.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   credentials = { username: '', password: '' };

//   constructor(private authService: AuthenticationService, private router: Router) {}

//   login() {
//     this.authService.login(this.credentials).subscribe(
//       response => {
//         // Handle successful login
//         console.log(response);
//         this.router.navigate(['/feed']);
//       },
//       error => {
//         // Handle login error
//         console.error(error);
//       }
//     );
//   }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      // Mock login logic
      this.router.navigate(['/feed']);
    }
  }
}

