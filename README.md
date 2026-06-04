# J&G Fashion Pets

Aplicacao MVC para cadastro de pets, simulacao de roupa com retalhos, mural de clientes, catalogo de tecidos e calculo de entrega.

## Arquitetura

- `frontend/`: telas HTML, CSS responsivo e JavaScript.
- `backend/src/main/java/com/jgfashion/controllers`: camada Controller da API REST.
- `backend/src/main/java/com/jgfashion/models`: camada Model com entidades JPA.
- `backend/src/main/java/com/jgfashion/repositories`: camada de acesso ao banco.
- `backend/src/main/java/com/jgfashion/services`: regras de negocio, como login e frete.
- `backend/src/main/java/com/jgfashion/config`: carga inicial de roupas e retalhos.

## Como rodar localmente

1. Instale Java 17 e Maven.
2. No terminal, entre em `backend`.
3. Rode `mvn spring-boot:run`.
4. Abra `frontend/index.html` no navegador.
5. Banco H2: acesse `http://localhost:8080/h2-console`.
   - JDBC URL: `jdbc:h2:mem:jg_pets_db`
   - Usuario: `sa`
   - Senha: deixe vazio

## Acesso admin

- Login: `Gessica`
- Senha: `Gege@1306`

## Endpoints principais

- `GET /api/pets`
- `POST /api/pets`
- `PUT /api/pets/{id}`
- `DELETE /api/pets/{id}`
- `GET /api/retalhos`
- `GET /api/roupas`
- `GET /api/logistica/calcular?km=12&modal=moto`
- `POST /api/auth/login`

## Observacoes

O frontend tem fallback em `localStorage` para facilitar testes visuais mesmo quando o backend estiver desligado. Com o backend ligado, o CRUD usa a API e grava no H2 em memoria.
