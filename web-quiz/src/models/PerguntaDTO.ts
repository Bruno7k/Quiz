export default class PerguntaDTO {
  id?: number;
  enunciado: string;
  alternativa1: string;
  alternativa2: string;
  alternativa3: string;
  alternativa4: string;
  alternativaCerta: string;
  jaRespondida: boolean = false;

  constructor(
    enunciado: string,
    alternativa1: string,
    alternativa2: string,
    alternativa3: string,
    alternativa4: string,
    alternativaCerta: string,
    id?: number
  ) {
    this.id = id;
    this.enunciado = enunciado;
    this.alternativa1 = alternativa1;
    this.alternativa2 = alternativa2;
    this.alternativa3 = alternativa3;
    this.alternativa4 = alternativa4;
    this.alternativaCerta = alternativaCerta;
  }
}
