import { Component } from '@angular/core';
import { LoginRegisterLayoutComponent } from '../../components/login-register-layout/login-register-layout.component';
import { PrimaryInputComponent } from '../../components/inputs/primary-input/primary-input.component';
import { PrimaryButtonComponent } from '../../components/buttons/primary-button/primary-button.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario/usuario.service';
import UsuarioDTO from '../../../models/UsuarioDTO';
import LoginRequestDTO from '../../../models/LoginRequestDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    LoginRegisterLayoutComponent,
    PrimaryInputComponent,
    PrimaryButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private _usuarioService: UsuarioService,
    private router: Router
  ) {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl(''),
  });

  efetuarLogin(): void {
    if (this.loginForm.valid) {
      let login = new LoginRequestDTO(
        this.loginForm.value.email || '',
        this.loginForm.value.senha || ''
      );

      this._usuarioService.logar(login).subscribe({
        next: (usuario) => {
          this._usuarioService.setAuthToken(usuario.token);
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log('Erro ao efetuar login');
        },
      });
    }
  }
}
