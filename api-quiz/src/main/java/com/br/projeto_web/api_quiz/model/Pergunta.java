package com.br.projeto_web.api_quiz.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@Entity
@Table(name = "pergunta")
@NoArgsConstructor
public class Pergunta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "enunciado", nullable = false, length = 255)
    private String enunciado;

    @Column(name = "alternativa_1", nullable = false, length = 255)
    private String alternativa1;

    @Column(name = "alternativa_2", nullable = false, length = 255)
    private String alternativa2;

    @Column(name = "alternativa_3", nullable = false, length = 255)
    private String alternativa3;

    @Column(name = "alternativa_4", nullable = false, length = 255)
    private String alternativa4;

    @Column(name = "alternativa_Certa", nullable = false, length = 255)
    private String alternativaCerta;
}
