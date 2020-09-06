# BooksAPI - BackEnd

Neste repositório há uma API de livros que realiza um CRUD completo.

## Instalação Local

Para utilizá-la localmente, veja o passo a passo:

1. Clone o repositório
2. Execute a Seed do banco que está na raiz do projeto
3. Instale as dependências:
  - npm install
4. Crie um arquivo com o nome `.env` na raiz do projeto com a seguinte estrutura:
  - PORT=[Porta onde a API ficará disponível, geralmente se usa a porta 3000]
  - PASSWORD=[Senha do seu banco de dados]
  - DBUSER=[Usuário do seu banco de dados, geralmente se é utilizado root]
  - HOST=[Endereço que será disponibilizado juntamente com a porta, geralmente utilizado como localhost]
  - DBPORT=[Porta onde o acesso ao banco de dados está disponível, geralmente utilizada a porta 33060]
  
Observação: Os colchetes não são necessários. O arquivo `.env` não diferencia type, então não há necessidade. Apenas insira os dados logo após o sinal de igual, sem espaços.

5. Execute o projeto
  - npm start
6. Ele ficará disponível no link `http://[HOST]:[PORT]`.


--- 
## EndPoints

#### GET http://localhost:[PORT]/books (Reúne todos os livros do banco)

###### Response
```
{
    "message": "success",
    "books": [
        {
            "id": 1,
            "name": "Kevin Kwan",
            "title": "Crazy rich asians",
            "description": "the outrageously funny debut novel about... ",
            "imageUrl": "https://m.media-amazon.com/images/I/41Phm14P9IL.jpg",
            "price": 24.1200008392334,
            "priceDiscount": 14.989999771118164,
            "stars": 4,
            "review": "252 review"
        },
        ...
    ]
}
```
---
#### POST http://localhost:[PORT]/books (Insere um Livro)

###### Request

```
{
  "name": "Kevin Kwan",
  "title": "Crazy rich asians",
  "description": "the outrageously funny ...the gossip...",
  "imageUrl": "https://m.media-amazon.com/images/I/41Phm14P9IL.jpg",
  "price": 24.12,
  "priceDiscount": 14.15,
  "stars": 4,
  "review": "252 review"
}
```

###### Response
```
{
  "status": "success",
  "insertedBook": {
    "id": 1,
    "name": "Kevin Kwan",
    "title": "Crazy rich asians",
    "description": "the outrageously funny ...the gossip...",
    "imageUrl": "https://m.media-amazon.com/images/I/41Phm14P9IL.jpg",
    "price": 24.12,
    "priceDiscount": 14.15,
    "stars": 4,
    "review": "252 review"
  }
}
```
---

### DELETE http://localhost:[PORT]/books (Apaga um Livro pelo título)

###### Request
```
{
  "title": "Crazy rich asians"
}

```

###### Response
```
{
  "message": "successfully deleted",
  "bookTitle": "Crazy rich asians"
}
```

