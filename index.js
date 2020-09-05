require('dotenv').config();
const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listen on ${PORT}`));
