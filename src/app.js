const express = require('express')
const app = express();
const port = process.env.PORT || 8081;
const bodyParser = require(`body-parser`);
const mongoose = require(`mongoose`);
const cors = require('cors');

mongoose.connect("mongodb+srv://teste:teste4958@books.8lstc.gcp.mongodb.net/Books?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on(`connected`, () => {
    console.log(`Connected to Database`);
});

mongoose.connection.on(`error`, (err) => {
    console.log(`Database error - ` + err);
});

app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.send('Endpoint inválido');
});

const routes = require('./routes/api');
const MongoClient = require("mongodb");

app.use(cors());

app.use('/api', routes);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(422).send({error: err.message});
});

app.listen(port, () => {
    console.log('server is running on port ' + port)
})
