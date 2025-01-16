package com.br.projeto_web.api_quiz.repository;

import com.br.projeto_web.api_quiz.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario,Long> {
    Usuario findByEmail(String email);
}
