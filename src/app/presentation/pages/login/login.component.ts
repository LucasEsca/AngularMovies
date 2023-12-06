import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  
  constructor(private authService: AuthService,
    private router: Router) { }

  onSubmit(username: string, password: string): void {
    const credentials = { userName: username, password: password };
  
    this.authService.login(credentials).subscribe((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        // Autenticación exitosa, redirige a la ruta /home
        this.router.navigate(['/home']);
      } else {
        // Mostrar mensaje de error o realizar acciones para credenciales incorrectas
        console.log('Credenciales incorrectas');
      }
    });
  }
}
