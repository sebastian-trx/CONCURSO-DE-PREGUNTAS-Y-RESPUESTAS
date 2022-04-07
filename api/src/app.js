const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
// Mongosesionstore
const MongoStore = require('connect-mongo');
const mongoose = require("mongoose");
// passport
const passport = require('passport');                   
const session = require("express-session");             
require('./utils/local-passport-setup')

require('./db.js');

const server = express();

const cors = require('cors');

server.set("trust proxy", 1);

server.name = 'API';

server.use(
  cors({
    origin: "http://localhost:3000",             //se habilitan las credenciales de cors para los pedidos que vengan del front
    credentials: true,
  })
)

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));



mongoose.connect(
  "mongodb+srv://eze:eze@cluster0.5cxnx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Mongoose Is Connected");
  }
);


server.use(
  session({
    secret: "secretcode",
    resave: false,
    path: "/",
    proxy: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: "mongodb+srv://eze:eze@cluster0.5cxnx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      ttl: 14 * 24 * 60 * 60 // = 14 days. Default
    }),
  })
);

//se inicializa passport y passport session para el manejo de la session con passport
server.use(passport.initialize());                    
server.use(passport.session());

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { 
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
