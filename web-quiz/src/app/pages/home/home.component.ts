import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import UsuarioDTO from '../../../models/UsuarioDTO';
import { SecondaryButtonComponent } from '../../components/buttons/secondary-button/secondary-button.component';
import { OutlinedButtonComponent } from '../../components/buttons/outlined-button/outlined-button.component';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { PrimaryInputComponent } from '../../components/inputs/primary-input/primary-input.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    SecondaryButtonComponent,
    OutlinedButtonComponent,
    MatIconModule,
    PrimaryInputComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private _usuarioService: UsuarioService,
    private router: Router
  ) {}

  alterarSenha = false;
  usuarioLogado!: UsuarioDTO;
  modalAjudaAberto: boolean = false;
  modalSairAberto: boolean = false;
  modalEditarPerfilAberto: boolean = false;

  editarPerfilForm = new FormGroup({
    nomeCompleto: new FormControl(''),
    email: new FormControl(''),
    novaSenha: new FormControl(''),
  });

  ngOnInit() {
    this.getUsuarioLogado();
  }

  getUsuarioLogado() {
    this._usuarioService.obterLogado().subscribe({
      next: (usuario) => {
        //Setando Usuario Logado
        this.usuarioLogado = usuario;

        //Setando valores nos campos do formulário
        this.editarPerfilForm.controls.nomeCompleto.setValue(usuario.nome);
        this.editarPerfilForm.controls.email.setValue(usuario.email);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  toggleAlterarSenha() {
    this.alterarSenha = !this.alterarSenha;
    if (!this.alterarSenha) {
      this.editarPerfilForm.controls.novaSenha.setValue('');
    }
  }

  atualizarPerfil() {
    const usuarioAtualizado = new UsuarioDTO(
      this.editarPerfilForm.value.nomeCompleto ?? '',
      this.editarPerfilForm.value.email ?? '',
      this.editarPerfilForm.value.novaSenha ?? ''
    );

    this._usuarioService.atualizar(usuarioAtualizado).subscribe({
      next: (usuario) => {
        this.usuarioLogado = usuario;
        this.editarPerfilForm.controls.nomeCompleto.setValue(usuario.nome);
        this.editarPerfilForm.controls.email.setValue(usuario.email);
        this.editarPerfilForm.controls.novaSenha.setValue('');
        this.alterarSenha = false;
        this.modalEditarPerfilAberto = false;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  jogar() {
    this.router.navigate(['/quiz']);
  }

  sair() {
    this._usuarioService.logout();
    this.router.navigate(['/login']);
  }

  abrirModalSair() {
    this.modalSairAberto = true;
  }

  fecharModalSair() {
    this.modalSairAberto = false;
  }

  abrirModalAjuda() {
    this.modalAjudaAberto = true;
  }

  fecharModalAjuda() {
    this.modalAjudaAberto = false;
  }

  abrirModalEditarPerfil() {
    this.modalEditarPerfilAberto = true;
  }

  fecharModalEditarPerfil() {
    this.modalEditarPerfilAberto = false;
  }
}
