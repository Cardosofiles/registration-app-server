# Registration App Server

API para gerenciamento de convites, perfis de usuários e ranking de participantes em um sistema de inscrições.

## Descrição

Este projeto fornece uma API robusta para manipulação de convites, criação de perfis, rastreamento de cliques em links de convite e exibição de rankings de usuários. Ideal para sistemas de indicação, campanhas de marketing viral ou eventos que utilizam convites personalizados.

## Funcionalidades Principais

- **Criação de Perfil:** Cadastro de novos usuários/perfis.
- **Acesso via Link de Convite:** Permite acessar e registrar cliques em links de convite únicos.
- **Contagem de Convites:** Consulta do número de convites enviados por um usuário.
- **Ranking de Participantes:** Listagem e consulta da posição de usuários em rankings de indicações.
- **Rastreamento de Cliques:** Consulta de cliques em links de convite por usuário.

## Stack e Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript.
- **Fastify** — Framework web rápido e eficiente.
- **TypeScript** — Tipagem estática para maior robustez.
- **Zod** — Validação de esquemas de dados.
- **@fastify/cors** — Suporte a CORS.
- **@fastify/swagger & swagger-ui** — Documentação automática da API.
- **Dotenv** — Gerenciamento de variáveis de ambiente.
- **(Banco de dados não especificado, configure conforme sua necessidade.)**

## Estrutura de Pastas

```
registration-app-server/
├── src/
│   ├── env.ts                # Configuração de variáveis de ambiente
│   ├── server.ts             # Inicialização e configuração do servidor Fastify
│   └── routes/               # Rotas da API organizadas por funcionalidade
│       ├── access-invite-link-route.ts
│       ├── create-profile-route.ts
│       ├── invites-count-route.ts
│       ├── list-ranking-route.ts
│       ├── subscriber-invite-clicks-route.ts
│       └── subscriber-ranking-position-route.ts
├── package.json              # Dependências e scripts do projeto
├── tsconfig.json             # Configuração do TypeScript
└── README.md                 # Documentação do projeto
```

### Explicação das Partes Relevantes

- **src/server.ts:** Ponto de entrada da aplicação, configura middlewares, rotas e documentação.
- **src/routes/:** Cada arquivo implementa um endpoint REST relacionado a convites, perfis ou ranking.
- **src/env.ts:** Carrega e valida variáveis de ambiente necessárias para o funcionamento do servidor.

## Instalação e Execução Local

### Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18.x
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Banco de dados (configure conforme sua necessidade)

### Passos

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/registration-app-server.git
   cd registration-app-server
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente:**

   - Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias, por exemplo:
     ```
     PORT=3333
     # Outras variáveis conforme src/env.ts
     ```

4. **(Opcional) Execute migrações do banco de dados:**

   - Caso utilize um ORM ou migrations, execute o comando apropriado.

5. **Inicie o servidor:**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

6. **Acesse a documentação da API:**
   - Disponível em [http://localhost:3333/docs](http://localhost:3333/docs)

## Executando Testes

> **Nota:** Caso existam testes automatizados, utilize:

```bash
npm test
# ou
yarn test
```

Se não houver testes implementados, recomenda-se adicionar testes unitários e de integração para garantir a qualidade do código.

## Exemplos de Uso dos Endpoints

### Criar Perfil

```http
POST /profile
Content-Type: application/json

{
  "name": "João",
  "email": "joao@email.com"
}
```

### Acessar Link de Convite

```http
GET /invite/:inviteCode
```

### Consultar Ranking

```http
GET /ranking
```

### Consultar Posição no Ranking

```http
GET /ranking/:subscriberId
```

### Consultar Cliques em Convite

```http
GET /invite-clicks/:subscriberId
```

## Boas Práticas e Recomendações

- Utilize o TypeScript para garantir tipagem e evitar erros comuns.
- Mantenha as rotas organizadas e documentadas.
- Utilize variáveis de ambiente para configurações sensíveis.
- Implemente testes automatizados para garantir a estabilidade.
- Siga o padrão de commits e utilize Pull Requests para contribuições.
- Consulte a documentação Swagger para detalhes dos endpoints.

## Contribuição

1. Fork este repositório.
2. Crie uma branch para sua feature ou correção: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'feat: minha nova feature'`
4. Push para o branch: `git push origin minha-feature`
5. Abra um Pull Request.

---

Para dúvidas ou sugestões, abra uma issue no repositório.

## 📫 Contato

<div align="center">

<a href="mailto:cardosofiles@outlook.com">
  <img src="https://img.shields.io/badge/Email-0078D4?style=for-the-badge&logo=microsoftoutlook&logoColor=white" alt="Email"/>
</a>
<a href="https://www.linkedin.com/in/joaobatista-dev/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
</a>
<a href="https://github.com/Cardosofiles" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
</a>
<a href="https://cardosofiles.dev/" target="_blank">
  <img src="https://img.shields.io/badge/Portfólio-222222?style=for-the-badge&logo=about.me&logoColor=white" alt="Portfólio"/>
</a>

</div>
