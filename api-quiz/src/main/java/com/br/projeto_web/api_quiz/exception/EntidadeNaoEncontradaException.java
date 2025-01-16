package com.br.projeto_web.api_quiz.exception;

public class EntidadeNaoEncontradaException extends RuntimeException {

    public EntidadeNaoEncontradaException(String message) {
        super(message);
    }

    public EntidadeNaoEncontradaException(){
        super("Entidade não encontrada");
    }
}
