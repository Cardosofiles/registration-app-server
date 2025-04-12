# 📦 registration-app-server

Servidor de registro construído com Node.js, TypeScript e Drizzle ORM

## ⚙️ Pré-requisitos

-[Docker](https://www.docker.com/get-started) instalado -[Docker Compose](https://docs.docker.com/compose/install/) instalado

## 🚀 Instruções de Instalação

### 1. Clone o Repositório

```bash
git clone https://github.com/Cardosofiles/registration-app-server.git
cd registration-app-server

```

### 2. Configure as Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

````env
# Banco de Dados
POSTGRES_USER=usuario
POSTGRES_PASSWORD=senha
POSTGRES_DB=registro_db
POSTGRES_HOST=postgres
POSTGRES_PORT=5432

# Redis
REDIS_HOST=redis
REDIS_PORT=6379

# Configurações da Aplicação
PORT=3000
NODE_ENV=development
``

> **Nota:** Substitua `usuario` e `senha` pelos valores desejado.

### 3. Crie o Arquivo `docker-compose.yml`
Na raiz do projeto, crie um arquivo `docker-compose.yml` com o seguinte conteúdo:

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: ${POSTGRES_DB}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "${POSTGRES_PORT}:5432"

  redis:
    image: redis:latest
    ports:
      - "${REDIS_PORT}:6379"

  app:
    build: .
    ports:
      - "${PORT}:3000"
    environment:
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: ${POSTGRES_DB}
      POSTGRES_HOST: ${POSTGRES_HOST}
      POSTGRES_PORT: ${POSTGRES_PORT}
      REDIS_HOST: ${REDIS_HOST}
      REDIS_PORT: ${REDIS_PORT}
      PORT: ${PORT}
      NODE_ENV: ${NODE_ENV}
    depends_on:
      - postgres
      - redis
    volumes:
      - .:/usr/src/app
    command: npm run dev

volumes:
  postgres_data:
``

> **Nota:** Certifique-se de que o `Dockerfile` está configurado corretamente para construir a imagem da aplicaçã.

### 4. Inicie os Serviços
Execute o seguinte comando para iniciar os serviços em segundo plan:

```bash
docker-compose up -d
``


### 5. Verifique os Logs
Para verificar os logs da aplicaçã:

```bash
docker-compose logs -f app
``


### 6. Acesse a Aplicação
A aplicação estará disponível em `http://localhost:3000.

## 🧪 Teste

Para executar os testes (assumindo que o script `test` está definido no `package.json):


```bash
docker-compose exec app npm test
``


## 🛠️ Comandos Úteis
- Parar os servios:

```bash
  docker-compose down
  ``

- Reiniciar os servios:

```bash
  docker-compose restart
  ``

- Acessar o terminal do contêiner da aplicaão:

```bash
  docker-compose exec app sh
  ``


## 📄 Liceça

Este projeto está licenciado sob a [MIT License](LICESE).

---

Se precisar de mais assistência ou tiver dúvidas específicas sobre a configuração, estou à disposição para ajudar!
````
