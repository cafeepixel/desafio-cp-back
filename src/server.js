const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');
const uri = 'mongodb+srv://teste:teste4958@books.8lstc.gcp.mongodb.net/Books?retryWrites=true&w=majority';

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, {useUnifiedTopology: true});

let books = [];

app.listen(80,() =>{
    console.log('server is running on port 80')
})

/*client.connect(err => {
    if (err) return console.log(err)
    db = client.db('books'); // coloque o nome do seu DB
    console.log('database connected');

    app.listen(80, () => {
        console.log('Server running on port 80');
    })
})*/

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/books', (req, res) => {
    //let cursor = db.collection('nomes').find();
    //return res.json({message:'Hello fdp'});
    return res.json(req.user);
})

app.post('/books',(req, res) => {
    const {booksFromBD} = req.body;
    books.push(booksFromBD);
    return res.json(books);
})

app.put('/books/:index', (req, res) => {
    const {index} = req.params;
    const {name} = req.body;

    books[index] = req.body;

    return res.json(books);
})

app.delete('/books/:index', (req, res) => {
    const {books} = req.params;

    books.splice(index, 1)
    return res.send();
})