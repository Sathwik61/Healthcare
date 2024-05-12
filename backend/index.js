const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cookieParser=require('cookie-parser')

const cors= require('cors')

const app = express();

require('dotenv').config();
require('./config/db');
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors())
app.use('/api/v1', routes);
app.use(cookieParser());

app.listen(PORT, ()=>{
    console.log(`Server is up and running on PORT: ${PORT}`);
})

//