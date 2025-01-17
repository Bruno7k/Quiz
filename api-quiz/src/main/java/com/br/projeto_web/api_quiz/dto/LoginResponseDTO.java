package com.br.projeto_web.api_quiz.dto;

import com.br.projeto_web.api_quiz.model.Usuario;

public record LoginResponseDTO(
        Usuario usuario,
        String token
) {
}
