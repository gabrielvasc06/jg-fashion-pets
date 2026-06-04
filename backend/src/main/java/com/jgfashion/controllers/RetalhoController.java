package com.jgfashion.controllers;

import com.jgfashion.models.Retalho;
import com.jgfashion.repositories.RetalhoRepository;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/retalhos")
@CrossOrigin(origins = "*")
public class RetalhoController {

    private final RetalhoRepository retalhoRepository;

    public RetalhoController(RetalhoRepository retalhoRepository) {
        this.retalhoRepository = retalhoRepository;
    }

    @GetMapping
    public List<Retalho> listarTodos() {
        return retalhoRepository.findAll();
    }
}
