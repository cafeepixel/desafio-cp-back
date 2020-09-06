const Books = require('../model/BookSchema')

exports.test = (req, res) => {
    res.send("Teste no controller");    
}

exports.details = (req, res) => {
    res.send({type: `GET`});
};

exports.add = (req, res) => {
    Books.create(req.body).then((pi) => {
        res.json(Books);
    });
};

exports.update = (req, res) => {
    res.send({type: `PUT`});
};

exports.delete = (req, res) => {
    res.send({type: `DELETE`});
};

exports.create = (req, res) => {
    console.log(`You made a POST request: `, req.body);
    res.send({
        type: `POST`,
        name: req.body.name,
        rank: req.body.rank
    });
}