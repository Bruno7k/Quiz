package com.br.projeto_web.api_quiz.service;

import com.br.projeto_web.api_quiz.exception.EmailJaCadastradoException;
import com.br.projeto_web.api_quiz.exception.EntidadeNaoEncontradaException;
import com.br.projeto_web.api_quiz.model.Usuario;
import com.br.projeto_web.api_quiz.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> listar(){
        return usuarioRepository.findAll();
    }

    public Usuario obtemUsuarioPorId(Long id){
        return usuarioRepository.findById(id).orElseThrow(EntidadeNaoEncontradaException::new);
    }

    public Usuario salvar(Usuario usuario){
        Usuario usuarioExistente = usuarioRepository.findByEmail((usuario.getEmail()));

        if(usuarioExistente != null){
            throw new EmailJaCadastradoException();
        }
        return usuarioRepository.save(usuario);
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
