package com.jgfashion.repositories;

import com.jgfashion.models.Roupa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoupaRepository extends JpaRepository<Roupa, Long> {
}
