package com.br.projeto_web.api_quiz.exception;

import org.springframework.http.HttpStatus;

public record RestErrorMessage(
        HttpStatus status,
        String message
) {
}
