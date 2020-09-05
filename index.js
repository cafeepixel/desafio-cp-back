require('dotenv').config();
const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const controllers = require('./controllers');

app.use(cors());
app.use(bodyParser.json());

app.use('/history', controllers.usersRouter);

app.use('*', async (_req, res) => res
  .status(404)
  .json({ error: 'Route not Found', code: 'not_found' }));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listen on ${PORT}`));
