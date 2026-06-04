package com.jgfashion.repositories;

import com.jgfashion.models.Retalho;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RetalhoRepository extends JpaRepository<Retalho, Long> {
}
