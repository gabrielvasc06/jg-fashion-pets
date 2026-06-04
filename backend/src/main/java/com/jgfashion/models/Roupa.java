package com.jgfashion.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "roupas")
public class Roupa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String tipoPet;
    private String tamanhoSugerido;
    private String tecidoSugerido;
    private String imagemUrl;
    private Double precoBase;

    public Roupa() {
    }

    public Roupa(String nome, String tipoPet, String tamanhoSugerido, String tecidoSugerido, String imagemUrl, Double precoBase) {
        this.nome = nome;
        this.tipoPet = tipoPet;
        this.tamanhoSugerido = tamanhoSugerido;
        this.tecidoSugerido = tecidoSugerido;
        this.imagemUrl = imagemUrl;
        this.precoBase = precoBase;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public String getTipoPet() { return tipoPet; }
    public void setTipoPet(String tipoPet) { this.tipoPet = tipoPet; }
    public String getTamanhoSugerido() { return tamanhoSugerido; }
    public void setTamanhoSugerido(String tamanhoSugerido) { this.tamanhoSugerido = tamanhoSugerido; }
    public String getTecidoSugerido() { return tecidoSugerido; }
    public void setTecidoSugerido(String tecidoSugerido) { this.tecidoSugerido = tecidoSugerido; }
    public String getImagemUrl() { return imagemUrl; }
    public void setImagemUrl(String imagemUrl) { this.imagemUrl = imagemUrl; }
    public Double getPrecoBase() { return precoBase; }
    public void setPrecoBase(Double precoBase) { this.precoBase = precoBase; }
}
