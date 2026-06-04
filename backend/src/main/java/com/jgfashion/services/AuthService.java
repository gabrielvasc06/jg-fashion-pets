package com.jgfashion.services;

import org.springframework.stereotype.Service;

@Service
public class AuthService {
    // Credencial administrativa solicitada para liberar a pagina admin.
    public boolean validarAdmin(String username, String password) {
        return "Gessica".equals(username) && "Gege@1306".equals(password);
    }
}
