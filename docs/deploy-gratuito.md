# Deploy gratuito ou de baixo custo

Este projeto tem duas partes:

- Frontend estatico: `frontend/`
- Backend Java Spring Boot: `backend/`

Para producao, troque o H2 em memoria por PostgreSQL. O H2 perde os dados quando o servidor reinicia.

## Opcao simples para estudar: Render + Neon

1. Crie uma conta no Neon.
2. Crie um projeto PostgreSQL.
3. Copie a connection string JDBC.
4. No Render, crie um Web Service apontando para o repositorio.
5. Configure:
   - Root directory: `backend`
   - Build command: `mvn clean package -DskipTests`
   - Start command: `java -jar target/jg-pet-api-0.0.1-SNAPSHOT.jar`
6. Adicione variaveis de ambiente no Render:
   - `SPRING_DATASOURCE_URL=jdbc:postgresql://HOST/DB?sslmode=require`
   - `SPRING_DATASOURCE_USERNAME=USUARIO`
   - `SPRING_DATASOURCE_PASSWORD=SENHA`
   - `SPRING_JPA_HIBERNATE_DDL_AUTO=update`
7. Publique o frontend no Cloudflare Pages, Vercel ou GitHub Pages.
8. No arquivo `frontend/js/app.js`, troque `API_URL` para a URL do backend publicado.

## Opcao tudo em um: Railway

1. Crie um novo projeto no Railway.
2. Adicione um servico PostgreSQL.
3. Adicione um servico para o backend Spring Boot apontando para `backend`.
4. Configure o build/start command como no Render.
5. Use as variaveis PostgreSQL geradas pelo Railway para preencher `SPRING_DATASOURCE_URL`, `SPRING_DATASOURCE_USERNAME` e `SPRING_DATASOURCE_PASSWORD`.
6. Publique o frontend separadamente em um host estatico.

## Opcao apenas frontend: GitHub Pages ou Cloudflare Pages

Use quando quiser demonstrar apenas layouts, carrossel, modelador e CRUD local via `localStorage`.

1. Envie o projeto para o GitHub.
2. Em GitHub Pages, publique a pasta `frontend`.
3. Em Cloudflare Pages, conecte o repositorio e defina o diretorio de saida como `frontend`.
4. Sem backend, o cadastro fica salvo apenas no navegador de quem esta testando.

## PostgreSQL no Spring Boot

Para trocar H2 por PostgreSQL local ou em nuvem, use:

```properties
spring.datasource.url=jdbc:postgresql://HOST:5432/NOME_DO_BANCO
spring.datasource.username=USUARIO
spring.datasource.password=SENHA
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=update
```

E adicione a dependencia no `pom.xml`:

```xml
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <scope>runtime</scope>
</dependency>
```
