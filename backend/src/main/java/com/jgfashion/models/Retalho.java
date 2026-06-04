package com.jgfashion.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "retalhos")
public class Retalho {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String corHex;
    private String imagemUrl;
    private String descricao;
    private Double estoqueMetros;

    public Retalho() {
    }

    public Retalho(String nome, String corHex, String imagemUrl, String descricao, Double estoqueMetros) {
        this.nome = nome;
        this.corHex = corHex;
        this.imagemUrl = imagemUrl;
        this.descricao = descricao;
        this.estoqueMetros = estoqueMetros;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public String getCorHex() { return corHex; }
    public void setCorHex(String corHex) { this.corHex = corHex; }
    public String getImagemUrl() { return imagemUrl; }
    public void setImagemUrl(String imagemUrl) { this.imagemUrl = imagemUrl; }
    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }
    public Double getEstoqueMetros() { return estoqueMetros; }
    public void setEstoqueMetros(Double estoqueMetros) { this.estoqueMetros = estoqueMetros; }
}
