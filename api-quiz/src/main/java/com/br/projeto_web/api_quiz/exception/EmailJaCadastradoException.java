package com.br.projeto_web.api_quiz.exception;

public class EmailJaCadastradoException extends RuntimeException {

    public EmailJaCadastradoException(String message) {
        super(message);
    }

    public EmailJaCadastradoException(){
        super("Email já cadastrado");
    }
}
