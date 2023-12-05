import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword: boolean = false;
  errorMessage: string = ''
  
  
  constructor(private authService: AuthService,
    private router: Router) { }

    onSubmit(username: string, password: string, event: Event): void {
      event.preventDefault();

      const credentials = { userName: username, password: password };
    
      this.authService.login(credentials).subscribe((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = 'Incorrect Validations... Try again.';
        }
      });
    }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
