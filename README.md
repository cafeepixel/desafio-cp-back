![](https://camo.githubusercontent.com/6c4c6991a73a486355072256b304cc6a61b97fd6/687474703a2f2f6361666565706978656c2e636f6d2e62722f617373696e6174757261732f6c6f676f5f636f6c6f725f6769742e706e67)
#  ☕ Desafio Backend CP

Objetivo desenvolver uma REST API com as seguintes funcionalidades:
- O usuário pode adicionar um livro
- O usuário pode listar os livros cadastrados
- O usuário pode deletar os livros cadastrados
- O usuário pode buscar os livros pelo título

A aplicação está __publicada__ no heroku no endereço:
[https://api-desafio-cb.herokuapp.com](https://api-desafio-cb.herokuapp.com)

## 🚀 Executando locamente

Faça um clone do repositório do github

`$ git clone https://github.com/abnerborgonha/desafio-cp-back.git`

Acesse a pasta que foi criada

`$  cd .\desafio-cp-back\ `

Execute o comando para poder instalar os pacotes baixados

`$  yarn `

Executando a aplicação

`$  yarn start `


## 📝 Documentação

### Status 
`200`   Quando a requisição foi feita com sucesso

`400`   Quando houve algum problema nos dados enviados pelo cliente

### Listar todos os livros
`GET` : <https://api-desafio-cb.herokuapp.com/book>

`RETURN` :
```javascript 
[
  {
    id: 1,
    title: "Código Limpo",
    author: "Robert C. Martin",
    synopsis: "Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito.",
    price: 87,
    cover_image: "https://books.google.com.br/books?id=GXWkDwAAQBAJ&printsec=frontcover&hl=pt-BR&source=gbs_ge_summary_r&cad=0",
    evaluation: 5,
    createdAt: "2020-09-06T01:54:44.893Z",
    updatedAt: "2020-09-06T01:54:44.893Z"
  },
  {
    id: 3,
    title: "Arquitetura Limpa",
    author: "Robert C. Martin",
    synopsis: "Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito.",
    price: 87,
    cover_image: "https://books.google.com.br/books?id=GXWkDwAAQBAJ&printsec=frontcover&hl=pt-BR&source=gbs_ge_summary_r&cad=0",
    evaluation: 5,
    createdAt: "2020-09-06T02:26:47.951Z",
    updatedAt: "2020-09-06T02:26:47.951Z"
  }

```

### Listar filtrando pelo titulo
`GET` : <https://api-desafio-cb.herokuapp.com/books?title=Arquitetura%20Limpa>
`PARAM` : ` ?title=Arquitetura Limpa`
`RETURN` :
```javascript 

  id: 3,
  title: "Arquitetura Limpa",
  author: "Robert C. Martin",
  synopsis: "Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito.",
  price: 87,
  cover_image: "https://books.google.com.br/books?id=GXWkDwAAQBAJ&printsec=frontcover&hl=pt-BR&source=gbs_ge_summary_r&cad=0",
  evaluation: 5,
  createdAt: "2020-09-06T02:26:47.951Z",
  updatedAt: "2020-09-06T02:26:47.951Z"
}
```

### Cadastrar um livro
`POST` : <https://api-desafio-cb.herokuapp.com/book>

`BODY` :
```javascript 
{
	title:"Arquitetura Limpa",
	author: "Robert C. Martin",
	synopsis: "Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito.",
	price: 87,
	cover_image: "https://books.google.com.br/books?id=GXWkDwAAQBAJ&printsec=frontcover&hl=pt-BR&source=gbs_ge_summary_r&cad=0",
	evaluation: 5
}
```
`RETURN` : 
```javascript 
{
  book: {
    id: 5,
    title: "Arquitetura Limpa 2",
    author: "Robert C. Martin",
    synopsis: "Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito.",
    price: 87,
    cover_image: "https://books.google.com.br/books?id=GXWkDwAAQBAJ&printsec=frontcover&hl=pt-BR&source=gbs_ge_summary_r&cad=0",
    evaluation: 5,
    updatedAt: "2020-09-06T18:25:30.061Z",
    createdAt: "2020-09-06T18:25:30.061Z"
  }
}
```

### Deletar um livro
`DELETE` : <https://api-desafio-cb.herokuapp.com/book/2>

`PARAM` : ` /:id`

`RETURN` : `SATUS CODE 200`

