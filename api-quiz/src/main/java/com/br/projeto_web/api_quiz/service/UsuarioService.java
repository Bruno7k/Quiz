package com.br.projeto_web.api_quiz.service;

import com.br.projeto_web.api_quiz.config.security.TokenService;
import com.br.projeto_web.api_quiz.dto.LoginRequestDTO;
import com.br.projeto_web.api_quiz.dto.LoginResponseDTO;
import com.br.projeto_web.api_quiz.exception.EmailJaCadastradoException;
import com.br.projeto_web.api_quiz.exception.EntidadeNaoEncontradaException;
import com.br.projeto_web.api_quiz.exception.InvalidPasswordException;
import com.br.projeto_web.api_quiz.model.Usuario;
import com.br.projeto_web.api_quiz.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private TokenService tokenService;

    public List<Usuario> listar(){
        return usuarioRepository.findAll();
    }

    public Usuario obtemUsuarioPorId(Long id){
        return usuarioRepository.findById(id).orElseThrow(EntidadeNaoEncontradaException::new);
    }

    public LoginResponseDTO salvar(Usuario usuario){
        Usuario usuarioExistente = usuarioRepository.findByEmail((usuario.getEmail())).orElse(null);

        if(usuarioExistente != null){
            throw new EmailJaCadastradoException();
        }
        usuario.setSenha(passwordEncoder.encode(usuario.getSenha()));

        String token = tokenService.generateToken(usuario);
        usuarioRepository.save(usuario);

        return new LoginResponseDTO(usuario, token);
    }

    public LoginResponseDTO login(LoginRequestDTO loginRequestDTO){
        Usuario usuario = usuarioRepository.findByEmail(loginRequestDTO.email())
                .orElseThrow(() -> new EntidadeNaoEncontradaException("Usuário não encontrado"));

        if(passwordEncoder.matches(loginRequestDTO.senha(), usuario.getSenha())){
            String token = tokenService.generateToken(usuario);
            return new LoginResponseDTO(usuario, token);
        }else{
            throw new InvalidPasswordException("Senha inválida");
        }

    }

    public Usuario atualizar(Long id, Usuario usuario){
        Usuario usuarioAtual = obtemUsuarioPorId(id);

        if(usuario.getNome() != null){
            usuarioAtual.setNome(usuario.getNome());
        }

        if(usuario.getEmail() != null){
            usuarioAtual.setEmail(usuario.getEmail());
        }

        if(usuario.getSenha() != null){
            usuarioAtual.setSenha(usuario.getSenha());
        }

        if(usuario.getPermissao() != null){
            usuarioAtual.setPermissao(usuario.getPermissao());
        }

        return usuarioRepository.save(usuarioAtual);
    }

    public void deletar(Long id){
        usuarioRepository.deleteById(id);
    }
}
