package com.br.projeto_web.api_quiz.controller;

import com.br.projeto_web.api_quiz.model.Pergunta;
import com.br.projeto_web.api_quiz.service.PerguntaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pergunta")
public class PerguntaController {

    @Autowired
    private PerguntaService perguntaService;

    @Autowired
    private PerguntaRepository perguntaPerguntaRepository;

    @GetMapping("/listar")
    public ResponseEntity<List<Pergunta>> listar(){
        return ResponseEntity.status(200).body(perguntaService.listar());
    }

    @GetMapping("/obter/{id}")
    public ResponseEntity<Pergunta> obter(@PathVariable Long id){
        return ResponseEntity.status(200).body(perguntaService.obtemPerguntaPorId(id));
    }

    @PostMapping("/salvar")
    public ResponseEntity<Pergunta> salvar(@RequestBody Pergunta pergunta){
        return ResponseEntity.status(201).body(perguntaService.salvar(pergunta));
    }

    @PutMapping("/atualizar/{id}")
    public ResponseEntity<Pergunta> atualizar(@PathVariable Long id, @RequestBody Pergunta pergunta){
        return ResponseEntity.status(200).body(perguntaService.atualizar(id, pergunta));
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id){
        perguntaService.deletar(id);
        return ResponseEntity.status(204).build();
    }
}
