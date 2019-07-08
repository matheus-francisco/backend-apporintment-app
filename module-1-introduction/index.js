const express = require('express');

const server = express();

// Query params = ?teste=1
// url localhost:3000/test?nome=Matheus
/*
server.get('/test', (req, res)=>{
    const nome = req.query.nome;

    return json({message: `Hello ${nome}`});
});*/
// Route params = /users/1
// Request body = {"name": "matheus"}

/*
server.get('/users/:id', (req, res)=>{
    const {id} = req.params;

    return res.json({message: `Hello ${id}`});
});*/


server.use((req, res, next)=>{
    console.log(`Método: ${req.method}; URL: ${req.url}`);

    next();
});
const users = ['Matheus', 'Jao'];

function checkUserExists(req, res, next) {
 if(!req.body.name){
     return res.status(400).json({error:'User name is required'});
 }
 return next();
}

function checkUserInArray(req, res, next){
 const user = users[req.params.index];
 if(!users){
     return res.status(400).json({error: 'User does not exists'});
 }
 req.user = users;

 return next();
}

server.get('/users', (req, res) =>{
 return res.json(users);
});

server.get('/users/:index',checkUserInArray, (req, res)=>{

 return res.json(req.user);

});

server.post('/users',checkUserExists, (req, res)=>{
 const { name }= req.body;

 users.push(name);
 return res.json(users);

});

server.put('/users/:index',checkUserExists, (req, res)=>{
    const { index } = req.params;
    const {name }= req.body;

    users[index] = nome;

    return res.json(users);
});

server.delete('/users/:index', (req, res)=>{
 const {index} = req.params;

 users.splice(index, 1);
 return res.json(users);

});
server.listen(3000);


