
const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors({   // exemplo de permissão de origem
       origin: 'http://serene-hugle-efa406.netlify.app'
  }));

app.use(express.json());
app.use(routes);



const PORT = process.env.PORT;


app.listen(PORT);