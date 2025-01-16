package com.br.projeto_web.api_quiz.repository;

import com.br.projeto_web.api_quiz.model.Pergunta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PerguntaRepository extends JpaRepository<Pergunta,Long> {
}
