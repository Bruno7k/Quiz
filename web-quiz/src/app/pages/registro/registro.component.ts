import { Component } from '@angular/core';
import { LoginRegisterLayoutComponent } from '../../components/login-register-layout/login-register-layout.component';
import { PrimaryButtonComponent } from '../../components/buttons/primary-button/primary-button.component';
import { PrimaryInputComponent } from '../../components/inputs/primary-input/primary-input.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';
import UsuarioDTO from '../../../models/UsuarioDTO';

@Component({
  selector: 'app-registro',
  imports: [
    LoginRegisterLayoutComponent,
    PrimaryButtonComponent,
    PrimaryInputComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss',
})
export class RegistroComponent {
  constructor(
    private _usuarioService: UsuarioService,
    private router: Router
  ) {}

  registroForm = new FormGroup({
    nomeCompleto: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl(''),
  });
  efetuarRegistro() {
    if (this.registroForm.valid) {
      let usuarioRegistrado = new UsuarioDTO(
        this.registroForm.value.nomeCompleto || '',
        this.registroForm.value.email || '',
        this.registroForm.value.senha || ''
      );

      this._usuarioService.salvar(usuarioRegistrado).subscribe({
        next: (usuario) => {
          this._usuarioService.setAuthToken(usuario.token);
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log('Erro ao efetuar registro');
        },
      });
    }
  }
}
