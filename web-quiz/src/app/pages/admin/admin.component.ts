import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { SecondaryButtonComponent } from '../../components/buttons/secondary-button/secondary-button.component';
import { PerguntaService } from '../../services/pergunta/pergunta.service';
import PerguntaDTO from '../../../models/PerguntaDTO';
import { PrimaryInputComponent } from '../../components/inputs/primary-input/primary-input.component';
import { MatRadioGroup } from '@angular/material/radio';
import { MatRadioButton } from '@angular/material/radio';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin',
  imports: [
    MatExpansionModule,
    MatIconModule,
    MatIconModule,
    SecondaryButtonComponent,
    PrimaryInputComponent,
    MatRadioGroup,
    MatRadioButton,
    ReactiveFormsModule,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  modalAdicionarPerguntaAberto: boolean = false;
  perguntas: PerguntaDTO[] = [];
  perguntaForms = new FormArray<FormGroup>([]);
  novaPerguntaForm = new FormGroup({
    enunciado: new FormControl(''),
    alternativa1: new FormControl(''),
    alternativa2: new FormControl(''),
    alternativa3: new FormControl(''),
    alternativa4: new FormControl(''),
    alternativaCorreta: new FormControl(),
  });

  constructor(
    private _perguntaService: PerguntaService,
    private _toastService: ToastrService
  ) {}

  ngOnInit() {
    this.carregarPerguntas();
  }

  carregarPerguntas() {
    this._perguntaService.listar().subscribe({
      next: (perguntas) => {
        this.perguntas = perguntas;
        console.log(this.perguntas);

        this.perguntaForms.clear();

        perguntas.forEach((pergunta) => {
          this.perguntaForms.push(
            new FormGroup({
              enunciado: new FormControl(pergunta.enunciado),
              alternativa1: new FormControl(pergunta.alternativa1),
              alternativa2: new FormControl(pergunta.alternativa2),
              alternativa3: new FormControl(pergunta.alternativa3),
              alternativa4: new FormControl(pergunta.alternativa4),
              alternativaCorreta: new FormControl(pergunta.alternativaCerta),
            })
          );
        });
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  abrirModalAdicionarPergunta() {
    this.modalAdicionarPerguntaAberto = true;
  }

  fecharModalAdicionarPergunta() {
    this.modalAdicionarPerguntaAberto = false;
  }

  atualizaPergunta(index: number) {
    let pergunta = this.perguntaForms.at(index).value;
    let perguntaDTO = new PerguntaDTO(
      pergunta.enunciado,
      pergunta.alternativa1,
      pergunta.alternativa2,
      pergunta.alternativa3,
      pergunta.alternativa4,
      pergunta.alternativaCorreta,
      this.perguntas[index].id
    );

    console.log(perguntaDTO);

    this._perguntaService.atualizar(perguntaDTO).subscribe({
      next: (perguntaResponse) => {
        console.log(perguntaResponse);
        this.carregarPerguntas();
        this._toastService.success('Pergunta atualizada com sucesso!');
      },
      error: (error) => {
        this._toastService.error('Erro ao atualizar pergunta');
        console.error(error);
      },
    });
  }

  criarNovaPergunta() {
    let perguntaDTO = new PerguntaDTO(
      this.novaPerguntaForm.value.enunciado || '',
      this.novaPerguntaForm.value.alternativa1 || '',
      this.novaPerguntaForm.value.alternativa2 || '',
      this.novaPerguntaForm.value.alternativa3 || '',
      this.novaPerguntaForm.value.alternativa4 || '',
      this.novaPerguntaForm.value.alternativaCorreta || ''
    );

    this._perguntaService.salvar(perguntaDTO).subscribe({
      next: (perguntaResponse) => {
        this.carregarPerguntas();
        this.fecharModalAdicionarPergunta();
        this._toastService.success('Pergunta criada com sucesso!');
      },
      error: (error) => {
        this._toastService.error('Erro ao criar pergunta');
        console.error(error);
      },
    });
  }
}
