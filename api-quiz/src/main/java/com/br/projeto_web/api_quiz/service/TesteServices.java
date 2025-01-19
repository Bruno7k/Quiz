package com.br.projeto_web.api_quiz.service;

import com.br.projeto_web.api_quiz.exception.EntidadeNaoEncontradaException;
import com.br.projeto_web.api_quiz.model.Pergunta;
import com.br.projeto_web.api_quiz.repository.PerguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PerguntaService {

    @Autowired
    private PerguntaRepository perguntaRepository;

    public List<Pergunta> listar(){
        return perguntaRepository.findAll();
    }

    public Pergunta obtemPerguntaPorId(Long id){
        return perguntaRepository.findById(id).orElseThrow(EntidadeNaoEncontradaException::new);
    }

    public Pergunta salvar(Pergunta pergunta){
        return perguntaRepository.save(pergunta);
    }

    public Pergunta atualizar(Long id, Pergunta pergunta){
        Pergunta perguntaNova = perguntaRepository.findById(id).orElseThrow(EntidadeNaoEncontradaException::new);

        if(pergunta.getEnunciado() != null){
            perguntaNova.setEnunciado(pergunta.getEnunciado());
        }

        if(pergunta.getAlternativa1() != null){
            perguntaNova.setAlternativa1(pergunta.getAlternativa1());
        }

        if(pergunta.getAlternativa2() != null){
            perguntaNova.setAlternativa2(pergunta.getAlternativa2());
        }

        if(pergunta.getAlternativa3() != null){
            perguntaNova.setAlternativa3(pergunta.getAlternativa3());
        }

        if(pergunta.getAlternativaCerta() != null){
            perguntaNova.setAlternativaCerta(pergunta.getAlternativaCerta());
        }

        return perguntaRepository.save(perguntaNova);
    }

    public void deletar(Long id){
        perguntaRepository.deleteById(id);
    }
}
