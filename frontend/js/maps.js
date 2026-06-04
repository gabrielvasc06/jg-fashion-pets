function calcularFreteLocal(km, modal) {
    const distancia = Math.max(1, Number(km || 1));
    const opcoes = {
        moto: { taxa: 8, km: 1.5, tempo: Math.max(25, distancia * 2.5), descricao: "Mais viavel para entregas urbanas pequenas e rapidas." },
        carro: { taxa: 20, km: 2, tempo: Math.max(40, distancia * 3), descricao: "Indicado para pedidos maiores ou entregas regionais." },
        aviao: { taxa: 60, km: 5, tempo: 120, descricao: "Usado apenas para longas distancias e envio nacional." }
    };
    const regra = opcoes[modal] || opcoes.moto;
    const valorNumero = regra.taxa + distancia * regra.km;

    return {
        modal: modal.toUpperCase(),
        distancia: `${distancia.toFixed(1)} km`,
        preco: valorNumero.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
        valorNumero,
        tempo: `${Math.round(regra.tempo)} minutos`,
        descricao: regra.descricao
    };
}

function extrairValorMonetario(valor) {
    const normalizado = String(valor || "0").replace(/[^\d,.-]/g, "").replace(".", "").replace(",", ".");
    return Number(normalizado) || 0;
}

function preencherCampo(id, valor) {
    const campo = document.getElementById(id);
    if (campo) campo.value = valor || "";
}

function montarDestinoCompleto() {
    const manual = document.getElementById("destino-entrega")?.value?.trim();
    const logradouro = document.getElementById("logradouro-entrega")?.value?.trim();
    const numero = document.getElementById("numero-entrega")?.value?.trim();
    const bairro = document.getElementById("bairro-entrega")?.value?.trim();
    const cidade = document.getElementById("cidade-entrega")?.value?.trim();
    const complemento = document.getElementById("complemento-entrega")?.value?.trim();

    const partes = [
        logradouro,
        numero ? `nº ${numero}` : "",
        complemento,
        bairro,
        cidade
    ].filter(Boolean);

    return partes.length ? partes.join(", ") : manual;
}

function atualizarDestinoCompleto() {
    const destino = montarDestinoCompleto();
    preencherCampo("destino-entrega", destino);
    return destino;
}

async function buscarEnderecoPorCep() {
    const cepInput = document.getElementById("cep-entrega");
    const cep = cepInput?.value?.replace(/\D/g, "");

    if (!cep || cep.length !== 8) {
        alert("Informe um CEP valido com 8 numeros.");
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (data.erro) throw new Error("CEP nao encontrado");

        preencherCampo("logradouro-entrega", data.logradouro);
        preencherCampo("bairro-entrega", data.bairro);
        preencherCampo("cidade-entrega", `${data.localidade}, ${data.uf}`);
        atualizarDestinoCompleto();
    } catch {
        alert("Nao consegui localizar esse CEP. Confira os numeros ou preencha o endereco manualmente.");
    }
}

function renderFrete(data, simulado = false) {
    const box = document.getElementById("resultado-logistica-box");
    if (!box) return;

    const endereco = atualizarDestinoCompleto();
    window.jgEntregaAtual = {
        modal: data.modal,
        distancia: data.distancia,
        preco: data.preco,
        valorNumero: data.valorNumero || extrairValorMonetario(data.preco),
        tempo: data.tempo,
        endereco
    };

    box.innerHTML = `
        <p class="eyebrow">${simulado ? "Modo visual" : "Calculo da API"}</p>
        <h3>${data.modal}</h3>
        ${endereco ? `<p><strong>Endereco:</strong> ${endereco}</p>` : ""}
        <p><strong>Distancia:</strong> ${data.distancia}</p>
        <p><strong>Custo:</strong> ${data.preco}</p>
        <p><strong>Prazo:</strong> ${data.tempo}</p>
        <p>${data.descricao || "Valor estimado para entrega do produto."}</p>
    `;

    if (typeof renderizarResumoPedido === "function") {
        renderizarResumoPedido();
    }
}

async function calcularFreteCompleto() {
    const km = document.getElementById("distancia-km").value;
    const modal = document.getElementById("modal-transporte").value;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 700);

    try {
        const response = await fetch(`http://localhost:8080/api/logistica/calcular?km=${encodeURIComponent(km)}&modal=${encodeURIComponent(modal)}`, {
            signal: controller.signal
        });
        if (!response.ok) throw new Error("API indisponivel");
        const data = await response.json();
        data.valorNumero = extrairValorMonetario(data.preco);
        renderFrete(data);
    } catch {
        renderFrete(calcularFreteLocal(km, modal), true);
    } finally {
        clearTimeout(timeoutId);
    }
}

function abrirGoogleMapsCompleto() {
    const origem = document.getElementById("origem-entrega")?.value || "Recife, PE";
    const destino = atualizarDestinoCompleto() || "Olinda, PE";
    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origem)}&destination=${encodeURIComponent(destino)}&travelmode=driving`;
    window.open(url, "_blank", "noopener,noreferrer");
}

document.addEventListener("DOMContentLoaded", () => {
    ["numero-entrega", "complemento-entrega", "logradouro-entrega", "bairro-entrega", "cidade-entrega"].forEach((id) => {
        document.getElementById(id)?.addEventListener("input", atualizarDestinoCompleto);
    });
});
