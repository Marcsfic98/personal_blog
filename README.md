# 📝 Personal Blog API - NestJS

Este é o projeto de uma API robusta para um Blog Pessoal, desenvolvida com o framework **NestJS**. A aplicação conta com um sistema completo de CRUD (Create, Read, Update, Delete) para postagens e temas, além de um sistema de autenticação de usuários via JWT.

## 🚀 Tecnologias Utilizadas

* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Framework:** [NestJS](https://nestjs.com/)
* **ORM:** [TypeORM](https://typeorm.io/)
* **Banco de Dados:** MySQL (Produção/Dev) / SQLite (Testes)
* **Segurança:** Passport.js, JWT (JSON Web Token) e Bcrypt
* **Documentação:** Swagger UI
* **Validação:** Class-validator & Class-transformer

## 📋 Funcionalidades e Endpoints

### Postagens (`/postagens`)
* `GET /postagens` - Lista todas as postagens.
* `GET /postagens/{id}` - Busca postagem por ID.
* `GET /postagens/titulo/{titulo}` - Busca postagens por termo no título.
* `POST /postagens` - Cria uma nova postagem (Protegido).
* `PUT /postagens` - Atualiza uma postagem existente (Protegido).
* `DELETE /postagens/{id}` - Remove uma postagem (Protegido).

### Temas (`/temas`)
* `GET /temas` - Lista todos os temas.
* `GET /temas/{id}` - Busca tema por ID.
* `GET /temas/descricao/{descricao}` - Busca temas por descrição.
* `POST /temas` - Cria um novo tema (Protegido).
* `PUT /temas` - Atualiza um tema (Protegido).
* `DELETE /temas/{id}` - Remove um tema (Protegido).

### Usuário (`/usuarios`)
* `POST /usuarios/cadastrar` - Cadastro de novo usuário.
* `POST /usuarios/logar` - Autenticação e retorno do Token JWT.
* `GET /usuarios/all` - Lista todos os usuários (Admin).
* `PUT /usuarios/atualizar` - Atualiza dados do usuário.

## 🛡️ Segurança
A API utiliza **Guardas de Rota (AuthGuard)**. Para acessar os métodos de escrita (POST, PUT, DELETE), é necessário enviar o Token JWT no Header da requisição:
`Authorization: Bearer <seu_token>`

## 📖 Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/personal_blog.git](https://github.com/seu-usuario/personal_blog.git)
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz do projeto (se necessário) ou configure o `app.module.ts` com suas credenciais do MySQL.

4.  **Execute a aplicação:**
    ```bash
    # Modo de desenvolvimento
    npm run start:dev
    ```

5.  **Acesse a documentação:**
    Acesse: `http://localhost:4000/swagger` (ou a porta configurada no seu `main.ts`) para visualizar o Swagger.

### 🧪 Testes de Ponta a Ponta (E2E)

Os testes E2E foram implementados utilizando **Jest** e **Supertest**, simulando cenários reais de uso da API.

**Cenários testados:**
* **Fluxo de Usuário:** Cadastro, login com validação de hash Bcrypt e falha com credenciais inválidas.
* **Integridade de Dados:** Garantia de que não é possível criar postagens vinculadas a temas inexistentes.
* **Proteção de Rotas:** Verificação de que rotas sensíveis retornam `401 Unauthorized` quando o Token JWT está ausente ou expirado.
* **Persistência:** Validação de que os dados são corretamente salvos e recuperados do banco de dados (SQLite/MySQL).

Para rodar os testes E2E:
```bash
npm run test:e2e

PERSONAL_BLOG/
├── src/
│   ├── auth/                      # Módulo de Autenticação e Segurança
│   │   ├── bcrypt/                # Utilitários de criptografia
│   │   ├── constants/             # Chaves e constantes JWT
│   │   ├── controller/            # Endpoints de login
│   │   ├── entities/              # Modelo de Login do Usuário
│   │   ├── guard/                 # Guardas de rota (JWT/Local)
│   │   ├── services/              # Lógica de negócio de autenticação
│   │   ├── strategy/              # Estratégias de validação Passport
│   │   └── auth.module.ts
│   ├── postagem/                  # Módulo de Postagens
│   │   ├── controllers/
│   │   ├── entities/
│   │   ├── services/
│   │   └── postagem.module.ts
│   ├── temas/                     # Módulo de Temas (Categorias)
│   │   ├── controller/
│   │   ├── entities/
│   │   ├── services/
│   │   └── temas.module.ts
│   ├── usuario/                   # Módulo de Usuários
│   │   ├── controllers/
│   │   ├── entities/
│   │   ├── services/
│   │   └── usuario.module.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/                          # Testes de Ponta a Ponta (E2E)
│   ├── jest-e2e.json              # Configuração do Jest para E2E
│   └── usuario.e2e-spec.ts        # Testes de integração do módulo Usuário
├── .gitignore
├── nest-cli.json
├── package.json                   # Dependências e scripts do projeto
└── tsconfig.json