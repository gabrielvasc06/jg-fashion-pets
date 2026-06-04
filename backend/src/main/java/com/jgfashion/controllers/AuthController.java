package com.jgfashion.controllers;

import com.jgfashion.models.Usuario;
import com.jgfashion.services.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Usuario usuario) {
        if (authService.validarAdmin(usuario.getUsername(), usuario.getPassword())) {
            return ResponseEntity.ok("Sucesso");
        }
        return ResponseEntity.status(401).body("Acesso negado");
    }
}
