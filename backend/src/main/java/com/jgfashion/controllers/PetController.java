package com.jgfashion.controllers;

import com.jgfashion.models.Pet;
import com.jgfashion.repositories.PetRepository;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/pets")
@CrossOrigin(origins = "*")
public class PetController {

    private final PetRepository petRepository;

    public PetController(PetRepository petRepository) {
        this.petRepository = petRepository;
    }

    @PostMapping
    public Pet criarPet(@RequestBody Pet pet) {
        return petRepository.save(pet);
    }

    @GetMapping
    public List<Pet> listarTodos() {
        return petRepository.findAll();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pet> atualizarPet(@PathVariable Long id, @RequestBody Pet petAtualizado) {
        return petRepository.findById(id)
                .map(pet -> {
                    pet.setNome(petAtualizado.getNome());
                    pet.setTipo(petAtualizado.getTipo());
                    pet.setPeito(petAtualizado.getPeito());
                    pet.setPescoco(petAtualizado.getPescoco());
                    pet.setCorRetalho(petAtualizado.getCorRetalho());
                    if (petAtualizado.getImagemBase64() != null && !petAtualizado.getImagemBase64().isBlank()) {
                        pet.setImagemBase64(petAtualizado.getImagemBase64());
                    }
                    return ResponseEntity.ok(petRepository.save(pet));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarPet(@PathVariable Long id) {
        if (!petRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        petRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
