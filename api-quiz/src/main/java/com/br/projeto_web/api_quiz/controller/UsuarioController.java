package com.br.projeto_web.api_quiz.controller;

import com.br.projeto_web.api_quiz.dto.LoginRequestDTO;
import com.br.projeto_web.api_quiz.dto.LoginResponseDTO;
import com.br.projeto_web.api_quiz.model.Usuario;
import com.br.projeto_web.api_quiz.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/listar")
    public ResponseEntity<List<Usuario>> listar(){
        return ResponseEntity.status(200).body(usuarioService.listar());
    }

    @GetMapping("/obter/{id}")
    public ResponseEntity<Usuario> obter(@PathVariable Long id){
        return ResponseEntity.status(200).body(usuarioService.obtemUsuarioPorId(id));
    }

    @PostMapping("/salvar")
    public ResponseEntity<LoginResponseDTO> salvar(@RequestBody Usuario usuario){
        return ResponseEntity.status(201).body(usuarioService.salvar(usuario));
    }

    @PostMapping("/logar")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginRequestDTO loginRequestDTO){
        return ResponseEntity.status(200).body(usuarioService.login(loginRequestDTO));
    }

    @PutMapping("/atualizar/{id}")
    public ResponseEntity<Usuario> atualizar(@PathVariable Long id, @RequestBody Usuario usuario){
        return ResponseEntity.status(200).body(usuarioService.atualizar(id, usuario));
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id){
        usuarioService.deletar(id);
        return ResponseEntity.status(204).build();
    }
}
