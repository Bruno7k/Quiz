import { Component, Input } from '@angular/core';
import { SecondaryButtonComponent } from '../../components/buttons/secondary-button/secondary-button.component';
import { OutlinedButtonComponent } from '../../components/buttons/outlined-button/outlined-button.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  imports: [SecondaryButtonComponent, OutlinedButtonComponent],
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.scss',
})
export class ResultadoComponent {
  quantidadeAcertos: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.quantidadeAcertos = Number(params['acertos']) || 0;
    });
  }

  getResposta(): string {
    if (this.quantidadeAcertos === 0) {
      return '📚 Você já pegou em um livro? Hora de começar! 😅';
    } else if (this.quantidadeAcertos < 3) {
      return '😬 Vixe! Tá precisando estudar mais... Mas não desista! 💪';
    } else if (this.quantidadeAcertos < 9) {
      return '📖 Você está no caminho certo! Continue assim! 🚀';
    } else if (this.quantidadeAcertos == 10) {
      return '🎉 Parabéns! Você acertou tudo!!! 🏆🔥';
    }

    return '';
  }
}
