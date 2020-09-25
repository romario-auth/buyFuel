const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const db = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O express está ok na porta ${PORT}`);
});

// body_Parser
app.use(bodyParser.urlencoded({extended: false}));

// handble bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// static folder
app.use(express.static(path.join(__dirname, 'public')));

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
    res.render('index');
});

// Venda routes
app.use('/venda', require('./routes/venda'));
