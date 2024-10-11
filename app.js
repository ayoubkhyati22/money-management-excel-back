const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

const app = express();
app.use(bodyParser.json());
app.use(cors());

// DB connexion
const connectDB = require('./config/db');

// Load Config
dotenv.config({path: './config/config.env'})

connectDB();




// Categories
app.use('/categories1',   require('./routes/category1'));
app.use('/categories2',   require('./routes/category2'));
app.use('/categories3',   require('./routes/category3'));

// Category Name By Id
app.use('/',              require('./routes/category1'));
app.use('/',              require('./routes/category2'));
app.use('/',              require('./routes/category3'));


// Historique
app.use('/all-historique',                 require('./routes/historique'));
app.use('/add-historiques',                require('./routes/historique'));
app.use('/search-historiques',             require('./routes/historique'));
app.use('/update-historique-categories',   require('./routes/historique'));



// PORT
app.listen(process.env.PORT || 5000);