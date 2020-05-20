
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: 'https://reverent-mirzakhani-8a01cb.netlify.app',
  optionsSuccessStatus: 200
}


app.use(cors(corsOptions));

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333

app.listen(PORT)