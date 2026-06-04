package com.jgfashion.services;

import java.util.HashMap;
import java.util.Map;
import org.springframework.stereotype.Service;

@Service
public class CalculoFreteService {

    public Map<String, Object> calcular(Double km, String modal) {
        double distancia = Math.max(1, km == null ? 1 : km);
        String transporte = modal == null ? "moto" : modal.toLowerCase();
        double taxaFixa;
        double valorPorKm;
        int tempoMinutos = (int) Math.max(25, distancia * 2.5);

        switch (transporte) {
            case "moto":
                taxaFixa = 8.00;
                valorPorKm = 1.50;
                break;
            case "carro":
                taxaFixa = 20.00;
                valorPorKm = 2.00;
                tempoMinutos = (int) Math.max(40, distancia * 3);
                break;
            case "aviao":
                taxaFixa = 60.00;
                valorPorKm = 5.00;
                tempoMinutos = 120;
                break;
            default:
                taxaFixa = 10.00;
                valorPorKm = 1.75;
        }

        double custoFinal = taxaFixa + (distancia * valorPorKm);

        Map<String, Object> dadosFrete = new HashMap<>();
        dadosFrete.put("modal", transporte.toUpperCase());
        dadosFrete.put("distancia", String.format("%.1f km", distancia));
        dadosFrete.put("preco", String.format("R$ %.2f", custoFinal));
        dadosFrete.put("tempo", tempoMinutos + " minutos");
        dadosFrete.put("descricao", descricao(transporte));
        return dadosFrete;
    }

    private String descricao(String modal) {
        if ("moto".equals(modal)) {
            return "Mais viavel para entregas urbanas pequenas e rapidas.";
        }
        if ("carro".equals(modal)) {
            return "Indicado para pedidos com mais volume ou entregas regionais.";
        }
        if ("aviao".equals(modal)) {
            return "Usado apenas para longas distancias e envio nacional.";
        }
        return "Modal alternativo calculado por taxa media.";
    }
}
