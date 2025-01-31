import { Component } from '@angular/core';
import { QuestionOptionButtonComponent } from '../../components/buttons/question-option-button/question-option-button.component';
import PerguntaDTO from '../../../models/PerguntaDTO';
import { PerguntaService } from '../../services/pergunta/pergunta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  imports: [QuestionOptionButtonComponent, QuestionOptionButtonComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent {
  perguntas: PerguntaDTO[] = [];
  quantidadeAcertos: number = 0;

  constructor(
    private _perguntaService: PerguntaService,
    private router: Router
  ) {}
  ngOnInit() {
    this.obterQuiz();
  }

  obterQuiz() {
    this._perguntaService.gerarQuestionario().subscribe({
      next: (perguntas) => {
        this.perguntas = perguntas;
        this.perguntas[0].jaRespondida = true;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  verificaAlternativa(index: number, alternativa: string): boolean {
    return this.perguntas[index].alternativaCerta === alternativa;
  }

  responder(index: number, alternativa: string) {
    const estaCorreta = this.verificaAlternativa(index, alternativa);

    if (estaCorreta) {
      this.quantidadeAcertos++;
    }

    // Espera 2 segundos antes de trocar a pergunta para dar tempo de ver a resposta
    setTimeout(() => {
      this.perguntas[index].jaRespondida = false;

      if (index + 1 < this.perguntas.length) {
        this.perguntas[index + 1].jaRespondida = true;
      }
    }, 1500); // 2 segundos

    //verifica se é a última pergunta, se for vai pra tela de resultado
    if (index + 1 === this.perguntas.length) {
      setTimeout(() => {
        this.finalizarQuiz();
      }, 1500);
    }
  }

  finalizarQuiz() {
    this.router.navigate(['/resultado'], {
      queryParams: { acertos: this.quantidadeAcertos },
    });
  }
}
