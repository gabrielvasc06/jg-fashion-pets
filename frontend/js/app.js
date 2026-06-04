const API_URL = "http://localhost:8080/api";

function svgData(svg) {
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function fabricImage(label, baseColor, accentColor, pattern = "dots") {
    const safeLabel = escapeHtml(label);
    const patternMarkup = {
        floral: `<g opacity=".85"><circle cx="170" cy="150" r="28" fill="${accentColor}"/><circle cx="210" cy="150" r="28" fill="${accentColor}"/><circle cx="190" cy="118" r="28" fill="${accentColor}"/><circle cx="190" cy="182" r="28" fill="${accentColor}"/><circle cx="190" cy="150" r="18" fill="#ffd166"/><use href="#flower" x="360" y="95"/><use href="#flower" x="610" y="250"/></g><defs><g id="flower"><circle r="22" cx="0" cy="0" fill="${accentColor}"/><circle r="22" cx="38" cy="0" fill="${accentColor}"/><circle r="22" cx="19" cy="-30" fill="${accentColor}"/><circle r="22" cx="19" cy="30" fill="${accentColor}"/><circle r="13" cx="19" cy="0" fill="#ffe8a3"/></g></defs>`,
        denim: `<path d="M0 120h900M0 240h900M0 360h900M0 480h900" stroke="${accentColor}" stroke-width="8" opacity=".35"/><path d="M150 0v620M450 0v620M750 0v620" stroke="#f3d28a" stroke-width="6" stroke-dasharray="22 18" opacity=".75"/><rect x="58" y="64" width="250" height="185" rx="18" fill="none" stroke="#f3d28a" stroke-width="7" stroke-dasharray="16 12"/>`,
        knit: `<path d="M55 0c45 40 45 80 0 120s-45 80 0 120 45 80 0 120-45 80 0 120 45 80 0 140M180 0c45 40 45 80 0 120s-45 80 0 120 45 80 0 120-45 80 0 120 45 80 0 140M305 0c45 40 45 80 0 120s-45 80 0 120 45 80 0 120-45 80 0 120 45 80 0 140M430 0c45 40 45 80 0 120s-45 80 0 120 45 80 0 120-45 80 0 120 45 80 0 140M555 0c45 40 45 80 0 120s-45 80 0 120 45 80 0 120-45 80 0 120 45 80 0 140M680 0c45 40 45 80 0 120s-45 80 0 120 45 80 0 120-45 80 0 120 45 80 0 140" fill="none" stroke="${accentColor}" stroke-width="18" opacity=".55"/>`,
        linen: `<path d="M0 90h900M0 180h900M0 270h900M0 360h900M0 450h900M0 540h900M90 0v620M180 0v620M270 0v620M360 0v620M450 0v620M540 0v620M630 0v620M720 0v620M810 0v620" stroke="${accentColor}" stroke-width="5" opacity=".42"/>`,
        waterproof: `<path d="M170 130c45 70 70 110 70 155 0 54-38 90-88 90s-88-36-88-90c0-45 25-85 70-155 8-12 28-12 36 0zM520 80c38 60 60 94 60 132 0 46-33 78-76 78s-76-32-76-78c0-38 22-72 60-132 7-10 25-10 32 0zM720 300c30 48 48 76 48 108 0 38-27 64-63 64s-63-26-63-64c0-32 18-60 48-108 6-9 24-9 30 0z" fill="${accentColor}" opacity=".6"/>`,
        twill: `<path d="M-80 80 80-80M-40 160 160-40M0 240 240 0M40 320 320 40M80 400 400 80M120 480 480 120M160 560 560 160M200 640 640 200M320 640 760 200M440 640 880 200M560 640 1000 200" stroke="${accentColor}" stroke-width="28" opacity=".42"/>`,
        rib: `<path d="M40 0v620M115 0v620M190 0v620M265 0v620M340 0v620M415 0v620M490 0v620M565 0v620M640 0v620M715 0v620M790 0v620M865 0v620" stroke="${accentColor}" stroke-width="28" opacity=".5"/>`,
        soft: `<circle cx="150" cy="160" r="70" fill="${accentColor}" opacity=".4"/><circle cx="350" cy="260" r="110" fill="${accentColor}" opacity=".32"/><circle cx="630" cy="180" r="85" fill="${accentColor}" opacity=".38"/><circle cx="750" cy="410" r="125" fill="${accentColor}" opacity=".26"/><circle cx="230" cy="450" r="95" fill="#fff" opacity=".24"/>`,
        dots: `<circle cx="140" cy="130" r="34" fill="${accentColor}" opacity=".62"/><circle cx="360" cy="250" r="46" fill="${accentColor}" opacity=".48"/><circle cx="620" cy="160" r="36" fill="${accentColor}" opacity=".55"/><circle cx="760" cy="400" r="54" fill="${accentColor}" opacity=".42"/>`
    }[pattern];

    return svgData(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 620"><rect width="900" height="620" fill="${baseColor}"/><rect width="900" height="620" fill="url(#light)" opacity=".6"/><defs><linearGradient id="light" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#ffffff" stop-opacity=".28"/><stop offset="1" stop-color="#000000" stop-opacity=".08"/></linearGradient></defs>${patternMarkup}<rect x="44" y="430" width="812" height="122" rx="28" fill="rgba(255,255,255,.82)"/><text x="450" y="505" text-anchor="middle" font-family="Arial" font-size="44" font-weight="800" fill="#2f2924">${safeLabel}</text></svg>`);
}

const fallbackRetalhos = [
    { nome: "Algodao soft rosa", corHex: "#f48fb1", estoqueMetros: 12.4, precoMetro: 18.00, descricao: "Leve, macio e indicado para roupas confortaveis.", imagemUrl: fabricImage("Algodao soft rosa", "#f8c8d8", "#ffffff", "soft") },
    { nome: "Jeans reaproveitado", corHex: "#526d82", estoqueMetros: 7.8, precoMetro: 22.00, descricao: "Visual urbano, resistente e facil de combinar.", imagemUrl: fabricImage("Jeans reaproveitado", "#526d82", "#b8c8d8", "denim") },
    { nome: "Malha verde sustentavel", corHex: "#4db6ac", estoqueMetros: 19.1, precoMetro: 16.00, descricao: "Boa elasticidade para pets ativos.", imagemUrl: fabricImage("Malha verde", "#4db6ac", "#d4f4e6", "knit") },
    { nome: "Linho amarelo de atelie", corHex: "#ffd166", estoqueMetros: 5.3, precoMetro: 24.00, descricao: "Textura elegante para pecas sob medida.", imagemUrl: fabricImage("Linho amarelo", "#ffd166", "#9f7f2f", "linen") },
    { nome: "Tricoline floral", corHex: "#b56576", estoqueMetros: 9.6, precoMetro: 20.00, descricao: "Estampa delicada para vestidos, lacos e coletes leves.", imagemUrl: fabricImage("Tricoline floral", "#ffe5ec", "#b56576", "floral") },
    { nome: "Moletinho cinza", corHex: "#8d99ae", estoqueMetros: 14.2, precoMetro: 17.00, descricao: "Confortavel para dias frios e roupas de descanso.", imagemUrl: fabricImage("Moletinho cinza", "#aab2c1", "#eef1f5", "soft") },
    { nome: "Tactel azul impermeavel", corHex: "#457b9d", estoqueMetros: 6.7, precoMetro: 25.00, descricao: "Bom para capas de chuva e passeios externos.", imagemUrl: fabricImage("Tactel azul", "#457b9d", "#bde0fe", "waterproof") },
    { nome: "Sarja terracota", corHex: "#c76f51", estoqueMetros: 8.4, precoMetro: 21.00, descricao: "Mais estruturado para pecas com acabamento premium.", imagemUrl: fabricImage("Sarja terracota", "#c76f51", "#f4b183", "twill") },
    { nome: "Ribana elastica", corHex: "#6a994e", estoqueMetros: 16.8, precoMetro: 14.00, descricao: "Ideal para punhos, golas e ajustes sob medida.", imagemUrl: fabricImage("Ribana elastica", "#6a994e", "#d8f3dc", "rib") },
    { nome: "Soft bege antialergico", corHex: "#d6ccc2", estoqueMetros: 11.5, precoMetro: 19.00, descricao: "Toque macio para pets sensiveis e filhotes.", imagemUrl: fabricImage("Soft bege", "#d6ccc2", "#ffffff", "soft") }
];

const fallbackRoupas = [
    {
        nome: "Colete passeio",
        tipoPet: "Cachorro",
        tamanhoSugerido: "P/M/G",
        tecidoSugerido: "Jeans reaproveitado",
        precoBase: 59.9,
        imagemUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dog_sweater_1.jpg?width=900"
    },
    {
        nome: "Moletom conforto",
        tipoPet: "Cachorro",
        tamanhoSugerido: "P/M",
        tecidoSugerido: "Malha verderosa",
        precoBase: 69.9,
        imagemUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sweaterdog.jpg?width=900"
    },
    {
        nome: "Capa leve felina",
        tipoPet: "Gato",
        tamanhoSugerido: "PP/P/M",
        tecidoSugerido: "Algodão soft rosa",
        precoBase: 49.9,
        imagemUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cat_in_Festive_Sweater.jpg?width=900"
    }
];

let fotoBase64Global = "";
let petsCache = [];

function fallbackImage(label) {
    const safeLabel = encodeURIComponent(label || "J&G Fashion Pets");
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 620'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%23f2d7c6'/%3E%3Cstop offset='1' stop-color='%2386c8bd'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='900' height='620' fill='url(%23g)'/%3E%3Ccircle cx='270' cy='245' r='96' fill='%23ffffff' opacity='.5'/%3E%3Ccircle cx='610' cy='350' r='130' fill='%23ffffff' opacity='.35'/%3E%3Ctext x='450' y='325' text-anchor='middle' font-family='Arial' font-size='44' font-weight='700' fill='%23352b25'%3E${safeLabel}%3C/text%3E%3C/svg%3E`;
}

function handleImageError(image, label) {
    image.onerror = null;
    image.src = fallbackImage(label);
}

function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    }[char]));
}

function formatMoney(value) {
    return Number(value || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

async function fetchJson(endpoint, fallback) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 700);

    try {
        const response = await fetch(`${API_URL}${endpoint}`, { signal: controller.signal });
        if (!response.ok) throw new Error("API indisponivel");
        return await response.json();
    } catch {
        return fallback;
    } finally {
        clearTimeout(timeoutId);
    }
}

function getLocalPets() {
    return JSON.parse(localStorage.getItem("jgFashionPets") || "[]");
}

function setLocalPets(pets) {
    localStorage.setItem("jgFashionPets", JSON.stringify(pets));
}

function aplicarTemaInicial() {
    const theme = localStorage.getItem("jgTheme") || "light";
    document.body.setAttribute("data-theme", theme);
    atualizarTextoTema(theme);
}

function atualizarTextoTema(theme) {
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.textContent = theme === "dark" ? "Claro" : "Escuro";
    }
}

function configurarTema() {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;


    themeToggle.addEventListener("click", () => {
        const current = document.body.getAttribute("data-theme") === "dark" ? "dark" : "light";
        const next = current === "dark" ? "light" : "dark";
        document.body.setAttribute("data-theme", next);
        localStorage.setItem("jgTheme", next);
        atualizarTextoTema(next);
    });
}

async function carregarRetalhos() {
    const carousel = document.getElementById("retalhos-carousel");
    if (!carousel) return;

    const apiRetalhos = await fetchJson("/retalhos", fallbackRetalhos);
    const retalhos = Array.isArray(apiRetalhos) && apiRetalhos.length >= fallbackRetalhos.length
        ? apiRetalhos
        : fallbackRetalhos;
    carousel.innerHTML = retalhos.map((retalho) => `
        <article class="fabric-card">
            <img loading="lazy" src="${retalho.imagemUrl || fallbackImage("Retalho")}" onerror="handleImageError(this, 'Retalho')" alt="Textura do retalho ${escapeHtml(retalho.nome)}">
            <div class="card-body">
                <div class="stock-row">
                    <h3>${escapeHtml(retalho.nome)}</h3>
                    <span class="swatch" style="background:${escapeHtml(retalho.corHex)}"></span>
                </div>
                <p>${escapeHtml(retalho.descricao)}</p>
                <strong>${Number(retalho.estoqueMetros).toFixed(1)} metros em estoque</strong>
                <span class="price-tag">${formatMoney(retalho.precoMetro || precoRetalhoPorCor(retalho.corHex))}/metro</span>
            </div>
        </article>
    `).join("");
}

function precoRetalhoPorCor(cor) {
    const retalho = fallbackRetalhos.find((item) => item.corHex.toLowerCase() === String(cor || "").toLowerCase());
    return retalho?.precoMetro || 18;
}

function nomeRetalhoPorCor(cor) {
    const retalho = fallbackRetalhos.find((item) => item.corHex.toLowerCase() === String(cor || "").toLowerCase());
    return retalho?.nome || "Retalho escolhido";
}

function popularSelectRetalhos() {
    const select = document.getElementById("pet-retalho");
    if (!select) return;

    select.innerHTML = fallbackRetalhos.map((retalho) => `
        <option value="${retalho.corHex}">
            ${retalho.nome} - ${formatMoney(retalho.precoMetro)}/m
        </option>
    `).join("");
}

function restaurarDashboardAdmin() {
    const loginBox = document.getElementById("login-form-box");
    const dashboard = document.getElementById("dashboard-protegido");
    if (!loginBox || !dashboard) return;

    if (localStorage.getItem("jgAdminAuth") === "true") {
        loginBox.hidden = true;
        dashboard.hidden = false;
    }
}

async function carregarRoupas() {
    const grid = document.getElementById("roupas-grid");
    if (!grid) return;

    const apiRoupas = await fetchJson("/roupas", fallbackRoupas);
    const roupas = Array.isArray(apiRoupas) && apiRoupas.length > fallbackRoupas.length
        ? apiRoupas
        : fallbackRoupas;
    grid.innerHTML = roupas.map((roupa) => `
        <article class="pet-card">
            <img loading="lazy" src="${roupa.imagemUrl || fallbackImage("Roupa pet")}" onerror="handleImageError(this, 'Roupa pet')" alt="${escapeHtml(roupa.nome)} para ${escapeHtml(roupa.tipoPet)}">
            <div class="card-body">
                <h3>${escapeHtml(roupa.nome)}</h3>
                <p>${escapeHtml(roupa.tipoPet)} | Tamanho ${escapeHtml(roupa.tamanhoSugerido)}</p>
                <p>Tecido: ${escapeHtml(roupa.tecidoSugerido)}</p>
                <strong>A partir de ${formatMoney(roupa.precoBase)}</strong>
            </div>
        </article>
    `).join("");
}

function mudarDesignModelador() {
    const peito = Number(document.getElementById("pet-peito")?.value || 45);
    const pescoco = Number(document.getElementById("pet-pescoco")?.value || 30);
    const cor = document.getElementById("pet-retalho")?.value || "#f48fb1";
    const tipo = document.getElementById("pet-tipo")?.value || "Cachorro";
    const pet = document.getElementById("visualizador-pet");
    const roupa = document.getElementById("visualizador-roupa");
    const summary = document.getElementById("model-summary");

    if (!pet || !roupa) return;

    const escala = Math.min(Math.max(peito / 45, 0.78), 1.35);
    pet.classList.toggle("cat", tipo === "Gato");
    pet.classList.toggle("dog", tipo !== "Gato");
    pet.style.transform = `scale(${escala})`;
    roupa.style.background = cor;
    roupa.style.width = `${Math.min(Math.max(peito * 2.5, 92), 160)}px`;
    roupa.style.height = `${Math.min(Math.max(pescoco * 2.1, 70), 118)}px`;

    if (summary) {
        summary.innerHTML = `
            Modelo: <strong>${tipo}</strong> |
            Peito: <strong>${peito} cm</strong> |
            Pescoco: <strong>${pescoco} cm</strong>
        `;
    }

    renderizarResumoPedido();
}

function calcularPedidoAtual() {
    const peito = Number(document.getElementById("pet-peito")?.value || 45);
    const cor = document.getElementById("pet-retalho")?.value || "#f48fb1";
    const precoMetro = precoRetalhoPorCor(cor);
    const tecidoUsado = Math.min(Math.max(peito / 75, 0.45), 1.15);
    const maoObra = 42;
    const entrega = Number(window.jgEntregaAtual?.valorNumero || 26);
    const tecido = tecidoUsado * precoMetro;
    const totalProduto = maoObra + tecido;
    return {
        nomeRetalho: nomeRetalhoPorCor(cor),
        precoMetro,
        tecidoUsado,
        maoObra,
        tecido,
        entrega,
        enderecoEntrega: window.jgEntregaAtual?.endereco || "",
        modalEntrega: window.jgEntregaAtual?.modal || "MOTO",
        totalProduto,
        total: totalProduto + entrega
    };
}

function renderizarResumoPedido() {
    const box = document.getElementById("checkout-summary");
    if (!box) return;

    const pedido = calcularPedidoAtual();
    box.innerHTML = `
        <article><strong>Retalho</strong><span>${escapeHtml(pedido.nomeRetalho)}</span></article>
        <article><strong>Valor do retalho</strong><span>${formatMoney(pedido.precoMetro)}/m</span></article>
        <article><strong>Tecido estimado</strong><span>${pedido.tecidoUsado.toFixed(2)}m</span></article>
        <article><strong>Produto</strong><span>${formatMoney(pedido.totalProduto)}</span></article>
        ${pedido.enderecoEntrega ? `<article><strong>Endereco</strong><span>${escapeHtml(pedido.enderecoEntrega)}</span></article>` : ""}
        <article><strong>Modal de entrega</strong><span>${pedido.modalEntrega}</span></article>
        <article><strong>Entrega estimada</strong><span>${formatMoney(pedido.entrega)}</span></article>
        <article><strong>Total previsto</strong><span>${formatMoney(pedido.total)}</span></article>
    `;
}

async function carregarPets() {
    const apiPets = await fetchJson("/pets", null);
    petsCache = Array.isArray(apiPets) ? apiPets : getLocalPets();
    renderizarPets();
}

function renderizarPets() {
    const lista = document.getElementById("lista-pets-crud");
    const mural = document.getElementById("mural-container");

    if (lista) {
        lista.innerHTML = petsCache.length ? petsCache.map((pet) => `
            <article class="crud-item">
                <div>
                    <strong>${escapeHtml(pet.nome)}</strong>
                    <div class="small-text">${escapeHtml(pet.tipo)} | ${pet.peito} cm peito</div>
                </div>
                <div class="crud-actions">
                    <button class="mini-button" type="button" onclick="carregarPetParaEditar('${pet.id}')">Editar</button>
                    <button class="mini-button delete" type="button" onclick="deletarPetDoBanco('${pet.id}')">Excluir</button>
                </div>
            </article>
        `).join("") : "<p class='small-text'>Nenhum pet cadastrado ainda.</p>";
    }

    if (mural) {
        mural.innerHTML = petsCache.length ? petsCache.map((pet) => {
            const imagem = pet.imagemBase64 || fallbackImage("Pet cliente");
            return `
                <article class="pet-card">
                    <img src="${imagem}" onerror="handleImageError(this, 'Pet cliente')" alt="Foto do pet ${escapeHtml(pet.nome)}">
                    <div class="card-body">
                        <h3>${escapeHtml(pet.nome)}</h3>
                        <p>${escapeHtml(pet.tipo)} usando retalho <span class="swatch" style="background:${escapeHtml(pet.corRetalho)}"></span></p>
                        <p class="small-text">Peito ${pet.peito} cm | Pescoco ${pet.pescoco} cm</p>
                    </div>
                </article>
            `;
        }).join("") : "<p class='small-text'>O mural sera preenchido conforme clientes cadastrarem seus pets.</p>";
    }
}

function configurarFormularioPet() {
    const form = document.getElementById("pet-crud-form");
    if (!form) return;

    popularSelectRetalhos();

    ["pet-tipo", "pet-peito", "pet-pescoco", "pet-retalho"].forEach((id) => {
        document.getElementById(id)?.addEventListener("input", mudarDesignModelador);
    });

    document.getElementById("pet-upload-foto")?.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (readerEvent) => {
            fotoBase64Global = readerEvent.target.result;
        };
        reader.readAsDataURL(file);
    });

    document.getElementById("btn-cancelar")?.addEventListener("click", limparFormulario);

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const id = document.getElementById("pet-id").value;
        const payload = {
            nome: document.getElementById("pet-nome").value.trim(),
            tipo: document.getElementById("pet-tipo").value,
            peito: Number(document.getElementById("pet-peito").value),
            pescoco: Number(document.getElementById("pet-pescoco").value),
            corRetalho: document.getElementById("pet-retalho").value,
            imagemBase64: fotoBase64Global
        };

        try {
            const response = await fetchWithTimeout(`${API_URL}/pets${id ? `/${id}` : ""}`, {
                method: id ? "PUT" : "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            if (!response.ok) throw new Error("Erro ao salvar");
        } catch {
            const localPets = getLocalPets();
            if (id) {
                const index = localPets.findIndex((pet) => String(pet.id) === String(id));
                if (index >= 0) localPets[index] = { ...localPets[index], ...payload, imagemBase64: payload.imagemBase64 || localPets[index].imagemBase64 };
            } else {
                localPets.push({ ...payload, id: Date.now() });
            }
            setLocalPets(localPets);
        }

        limparFormulario();
        await carregarPets();
    });
}

function configurarPagamentoSimulado() {
    const methodButtons = document.querySelectorAll("[data-payment-method]");
    const details = document.getElementById("payment-details");
    const qr = document.getElementById("payment-qr");
    if (!methodButtons.length || !details) return;

    const content = {
        pix: {
            title: "QR Code Pix",
            body: "Escaneie o QR Code demonstrativo ou copie a chave Pix simulada: jg-fashion-pets@pix.local",
            qrText: "PIX J&G 9590"
        },
        credito: {
            title: "Cartao de credito",
            body: "Preencha os dados de teste do cartao. Nenhuma cobranca real sera feita neste layout.",
            form: true,
            qrText: ""
        },
        debito: {
            title: "Cartao de debito",
            body: "Use os campos simulados para demonstrar a finalizacao por debito.",
            form: true,
            qrText: ""
        },
        boleto: {
            title: "Boleto bancario",
            body: "Boleto simulado gerado com linha digitavel demonstrativa: 23790.00009 01234.567890 12345.678901 1 9999000009590",
            qrText: "BOLETO 9590"
        }
    };

    methodButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const data = content[button.dataset.paymentMethod];
            methodButtons.forEach((item) => item.classList.remove("selected"));
            button.classList.add("selected");
            details.hidden = false;
            details.innerHTML = `
                <h3>${data.title}</h3>
                <p>${data.body}</p>
                ${data.form ? `
                    <div class="form-row">
                        <div><label>Nome no cartao</label><input type="text" placeholder="Nome impresso"></div>
                        <div><label>Numero do cartao</label><input type="text" placeholder="0000 0000 0000 0000"></div>
                    </div>
                    <div class="form-row">
                        <div><label>Validade</label><input type="text" placeholder="MM/AA"></div>
                        <div><label>CVV</label><input type="text" placeholder="123"></div>
                    </div>
                ` : ""}
            `;
            if (qr) {
                qr.hidden = !data.qrText;
                qr.dataset.qrText = data.qrText || "";
            }
        });
    });
}

function carregarPetParaEditar(id) {
    const pet = petsCache.find((item) => String(item.id) === String(id));
    if (!pet) return;

    document.getElementById("pet-id").value = pet.id;
    document.getElementById("pet-nome").value = pet.nome;
    document.getElementById("pet-tipo").value = pet.tipo;
    document.getElementById("pet-peito").value = pet.peito;
    document.getElementById("pet-pescoco").value = pet.pescoco;
    document.getElementById("pet-retalho").value = pet.corRetalho;
    document.getElementById("form-title").textContent = "Editar pet";
    document.getElementById("btn-cancelar").hidden = false;
    fotoBase64Global = "";
    mudarDesignModelador();
}

async function deletarPetDoBanco(id) {
    if (!confirm("Deseja remover este pet?")) return;

    try {
        const response = await fetchWithTimeout(`${API_URL}/pets/${id}`, { method: "DELETE" });
        if (!response.ok) throw new Error("Erro ao excluir");
    } catch {
        setLocalPets(getLocalPets().filter((pet) => String(pet.id) !== String(id)));
    }

    await carregarPets();
}

function limparFormulario() {
    const form = document.getElementById("pet-crud-form");
    if (!form) return;

    form.reset();
    document.getElementById("pet-id").value = "";
    document.getElementById("form-title").textContent = "Cadastrar pet";
    document.getElementById("btn-cancelar").hidden = true;
    fotoBase64Global = "";
    mudarDesignModelador();
}

async function efetuarLoginAdministrativo() {
    const username = document.getElementById("admin-user").value.trim();
    const password = document.getElementById("admin-pass").value;

    try {
        const response = await fetchWithTimeout(`${API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });
        if (!response.ok) throw new Error("Credenciais negadas");
        liberarDashboard();
    } catch {
        if (username === "Gessica" && password === "Gege@1306") {
            liberarDashboard();
        } else {
            alert("Credenciais incorretas. Apenas a admin Gessica possui acesso.");
        }
    }
}

function liberarDashboard() {
    localStorage.setItem("jgAdminAuth", "true");
    document.getElementById("login-form-box").hidden = true;
    document.getElementById("dashboard-protegido").hidden = false;
}

function fazerLogout() {
    localStorage.removeItem("jgAdminAuth");
    window.location.href = "admin.html";
}

function protegerPaginaAdmin() {
    const adminPage = document.body.dataset.adminPage === "true";
    if (!adminPage) return;

    if (localStorage.getItem("jgAdminAuth") !== "true") {
        window.location.href = "admin.html";
    }
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 700) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
        return await fetch(url, { ...options, signal: controller.signal });
    } finally {
        clearTimeout(timeoutId);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    aplicarTemaInicial();
    configurarTema();
    protegerPaginaAdmin();
    restaurarDashboardAdmin();
    configurarFormularioPet();
    configurarPagamentoSimulado();
    mudarDesignModelador();
    carregarRetalhos();
    carregarRoupas();
    carregarPets();
});
