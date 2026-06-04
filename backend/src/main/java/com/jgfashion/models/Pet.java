package com.jgfashion.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "pets")
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String tipo;
    private Double peito;
    private Double pescoco;
    private String corRetalho;

    @Lob
    @Column(length = 16777216)
    private String imagemBase64;

    public Pet() {
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public String getTipo() { return tipo; }
    public void setTipo(String tipo) { this.tipo = tipo; }
    public Double getPeito() { return peito; }
    public void setPeito(Double peito) { this.peito = peito; }
    public Double getPescoco() { return pescoco; }
    public void setPescoco(Double pescoco) { this.pescoco = pescoco; }
    public String getCorRetalho() { return corRetalho; }
    public void setCorRetalho(String corRetalho) { this.corRetalho = corRetalho; }
    public String getImagemBase64() { return imagemBase64; }
    public void setImagemBase64(String imagemBase64) { this.imagemBase64 = imagemBase64; }
}
