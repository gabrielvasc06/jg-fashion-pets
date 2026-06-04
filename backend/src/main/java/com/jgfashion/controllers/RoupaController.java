package com.jgfashion.controllers;

import com.jgfashion.models.Roupa;
import com.jgfashion.repositories.RoupaRepository;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/roupas")
@CrossOrigin(origins = "*")
public class RoupaController {

    private final RoupaRepository roupaRepository;

    public RoupaController(RoupaRepository roupaRepository) {
        this.roupaRepository = roupaRepository;
    }

    @GetMapping
    public List<Roupa> listarTodas() {
        return roupaRepository.findAll();
    }
}
