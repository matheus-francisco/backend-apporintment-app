const express = require('express');

const server = express();

// Query params = ?teste=1
// url localhost:3000/test?nome=Matheus
server.get('/test', (req, res)=>{
    const nome = req.query.nome;

    return json({message: `Hello ${nome}`});
});
// Route params = /users/1
// Request body = {"name": "matheus"}


server.get('/users/:id', (req, res)=>{
    const {id} = req.params;

    return res.json({message: `Hello ${id}`});
});
server.listen(3000);


