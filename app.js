const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O express está ok na porta ${PORT}`);
});

// body_Parser
app.use(bodyParser.urlencoded({extended: false}));

// dbconnetion
db
    .authenticate()
    .then(() => {
        console.log("Connection db success.");
    })
    .catch( err => {
        console.log("Connection db failure", err);
    });


// routes
app.get('/', (req, res) => {
    res.send("Está funcionando 16 set 2020 - bb");
});

// Venda routes
app.use('/venda', require('./routes/venda'));
