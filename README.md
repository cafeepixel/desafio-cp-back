![Logo](http://cafeepixel.com.br/assinaturas/logo_color_git.png)
# Desafio CP - Backend

### Documentação da API

[Desafio CP API](https://web.postman.co/collections/11225592-488add05-8adc-4d50-bc9c-4e7c3432e083?version=latest&workspace=023f721b-0834-4df4-8481-8a8a8039e24a)


### Rodando a aplicação localmente

- Clonar o repositório
- Configurar as variáveis de ambiente (colocar informações sobre seu banco), sendo elas:
    - PORT=PORTA_DA_APLICAÇÃO
    - DB_USER=USUÁRIO_DO_SEU_BANCO
    - DB_PASSWORD=SENHA_DO_SEU_BANCO
    - DB_HOST=HOST_DO_SEU_BANCO
    - DB_PORT=PORTA_DO_SEU_BANCO
    - DB_DATABASE_NAME=SCHEMA_DO_SEU_BANCO
    - BOOKS_DB_NAME=TABELA_DE_LIVROS_DO_BANCO*
- Instalar as dependências, via npm ou yarn
- Executar o projeto com npm start

Após esses passos, a aplicação estará rodando no http://localhost:PORT (se não for especificada no .env, rodará na 3000)

*A tabela de livros foi criada da seguinte forma:
```sql
CREATE table CP_Books(
	id VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    price FLOAT NOT NULL,
    image VARCHAR(255) NOT NULL,
    rating FLOAT NOT NULL,
	PRIMARY KEY (author, title)
);
```


