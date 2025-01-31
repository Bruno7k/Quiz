package com.br.projeto_web.api_quiz.controller;

import com.br.projeto_web.api_quiz.dto.LoginRequestDTO;
import com.br.projeto_web.api_quiz.dto.LoginResponseDTO;
import com.br.projeto_web.api_quiz.model.Usuario;
import com.br.projeto_web.api_quiz.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
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

    @GetMapping("/obterLogado")
    public ResponseEntity<Usuario> obterLogado(){
        return ResponseEntity.status(200).body(usuarioService.obtemUsuarioLogado());
    }

    @PostMapping("/salvar")
    public ResponseEntity<LoginResponseDTO> salvar(@RequestBody Usuario usuario){
        return ResponseEntity.status(201).body(usuarioService.salvar(usuario));
    }

    @PostMapping("/logar")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginRequestDTO loginRequestDTO){
        return ResponseEntity.status(200).body(usuarioService.login(loginRequestDTO));
    }

    @PutMapping("/atualizar")
    public ResponseEntity<Usuario> atualizar(@RequestBody Usuario usuario){
        return ResponseEntity.status(200).body(usuarioService.atualizar(usuario));
    }

    @DeleteMapping("/deletar")
    public ResponseEntity<Void> deletar(){
        usuarioService.deletar();
        return ResponseEntity.status(204).build();
    }
}
