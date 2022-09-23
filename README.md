# Projeto TrybeSmith ⚔️
Neste projeto, o objetivo foi desenvolver uma API de uma loja de itens medievais usando TypeScript.
Para realizar o trabalho por completo, foi desenvolvido o modelo de arquitetura MSC, além de ser possível realizar o CRUD por meio dos seus endpoints criados.

* Construído com Node.js, Express, Typescript, MySQL e Docker

### Instruções

- Para rodar o repositório localmente, realize o clone do projeto e utilize os comandos a seguir para inicializar o Docker e instalar as dependências:

**Observação:** O arquivo `Trybesmith.sql` cobtém as `queries` que cria e popula o banco no MySQL.

```
docker-compose up -d
docker exec -it trybesmith bash
npm install // para instalar as dependências
docker-compose down // para parar completamente a aplicação
```

E utilize os comandos a seguir para executar a aplicação:

```
npm start // para iniciar a aplicação
```

### Endpoints

#### Produtos

| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Realiza o cadastro de um produto | http://localhost:3000/products |
| `GET` | Retorna uma listagem de todos os produtos cadastrados | http://localhost:3000/products |

Nessa requisição POST é necessário informar o seguinte JSON:

```
{
  "name": "Espada longa",
  "amount": "30 peças de ouro"
}
```

#### Usuários

| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Realiza o cadastro de uma pessoa usuária e retorna o token | http://localhost:3000/users |

Nessa requisição POST é necessário informar o seguinte JSON:

```
{
  "username": "MAX",
  "classe": "swordsman",
  "level": 10,
  "password": "SavingPeople"
}
```

#### Login

| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Realiza o login de uma pessoa usuária e retorna o token | http://localhost:3000/login |

Nessa requisição POST é necessário informar o seguinte JSON:

```
{
  "username": "MAX",
  "password": "SavingPeople"
}
```

#### Pedidos

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna uma listagem com todos os pedidos | http://localhost:3000/orders |
| `POST` | Realiza o cadastro de novos pedidos, podendo ser realizando apenas por usuários com token válido | http://localhost:3000/orders |

Nessa requisição POST é necessário informar o seguinte JSON:

```
{
  "productsIds": [1, 2]
}
```
