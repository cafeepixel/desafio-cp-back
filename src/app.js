const express = require('express')
const app = express();
const port = 8081;
const bodyParser = require(`body-parser`);
const mongoose = require(`mongoose`);

mongoose.connect(`mongodb+srv://teste:teste4958@books.8lstc.gcp.mongodb.net/Books?retryWrites=true&w=majority`);

mongoose.connection.on(`connected`, () => {
    console.log(`Connected to Database`);
});

mongoose.connection.on(`error`, (err) => {
    console.log(`Database error` + err);
});

app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.send('End Point inválido');
});

const routes = require('./routes/api');

app.use('/api', routes);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(422).send({error: err.message});
});

app.listen(process.env.port || port, () => {
    console.log('server is running on port ' + port)
})