const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require('dotenv').config();
const { seeds } = require ("./src/utils/seeds")

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3001, () => {
    //precarga de datos para la db
    seeds();
    console.log('%s listening at 3001'); 
  });
});
