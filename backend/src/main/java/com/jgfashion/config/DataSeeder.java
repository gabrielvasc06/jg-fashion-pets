package com.jgfashion.config;

import com.jgfashion.models.Retalho;
import com.jgfashion.models.Roupa;
import com.jgfashion.repositories.RetalhoRepository;
import com.jgfashion.repositories.RoupaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    private final RetalhoRepository retalhoRepository;
    private final RoupaRepository roupaRepository;

    public DataSeeder(RetalhoRepository retalhoRepository, RoupaRepository roupaRepository) {
        this.retalhoRepository = retalhoRepository;
        this.roupaRepository = roupaRepository;
    }

    @Override
    public void run(String... args) {
        if (retalhoRepository.count() == 0) {
            retalhoRepository.save(new Retalho("Algodao soft rosa", "#f48fb1", "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80", "Leve, macio e indicado para roupas confortaveis.", 12.4));
            retalhoRepository.save(new Retalho("Jeans reaproveitado", "#526d82", "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80", "Visual urbano, resistente e facil de combinar.", 7.8));
            retalhoRepository.save(new Retalho("Malha verde sustentavel", "#4db6ac", "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=900&q=80", "Boa elasticidade para pets ativos.", 19.1));
            retalhoRepository.save(new Retalho("Linho amarelo de atelie", "#ffd166", "https://images.unsplash.com/photo-1520697222867-7f01a7f5727b?auto=format&fit=crop&w=900&q=80", "Textura elegante para pecas sob medida.", 5.3));
        }

        if (roupaRepository.count() == 0) {
            roupaRepository.save(new Roupa("Colete passeio", "Cachorro", "P/M/G", "Jeans reaproveitado", "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dog_sweater_1.jpg?width=900", 59.90));
            roupaRepository.save(new Roupa("Moletom conforto", "Cachorro", "P/M", "Algodao soft rosa", "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sweaterdog.jpg?width=900", 69.90));
            roupaRepository.save(new Roupa("Capa leve felina", "Gato", "PP/P/M", "Malha verde sustentavel", "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cat_in_Festive_Sweater.jpg?width=900", 49.90));
        }
    }
}
