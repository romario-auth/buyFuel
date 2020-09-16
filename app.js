const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O express está ok na porta ${PORT}`);
});

app.get('/', (req, res) => {
    res.send("Está funcionando 16 set 2020 - bb");
})