//server.js
const express       = require('express');
const MongoClient   = require('mongodb').MongoClient;
const db            = require('./config/db')
const bodyParaser   = require('body-parser');
const app           = express();
app.use(bodyParaser.json());

const port = 3000;
MongoClient.connect(db.url, (err, database) => {
    if(err) throw err;
    require('./app/routes') (app, database);
    app.listen(port, () => {
        console.log('We are live on: ' + port);
    })
});
