package com.jgfashion.controllers;

import com.jgfashion.services.CalculoFreteService;
import java.util.Map;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/logistica")
@CrossOrigin(origins = "*")
public class LogisticaController {

    private final CalculoFreteService freteService;

    public LogisticaController(CalculoFreteService freteService) {
        this.freteService = freteService;
    }

    @GetMapping("/calcular")
    public Map<String, Object> obterFrete(@RequestParam Double km, @RequestParam String modal) {
        return freteService.calcular(km, modal);
    }
}
