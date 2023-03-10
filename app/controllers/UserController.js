const User = require('../models/User')

//Listar
function index(req, res){
    User.find({})
        .then(users => {
            if(users.length) return res.status(200).send({users})
            return res.status(204).send({message: 'SIN REGISTROS'})
        }).catch(error => res.status(500).send({error}))
}

//Crear
function create(req, res){
    let user = new User(req.body)
    user.save().then(user => res.status(201).send({user})).catch(error => res.status(500).send({error}))
}

//Listar por condicion
function show(req, res){
    if(req.body.error) return res.status(500).send({error})
    if(!req.body.users) return res.status(404).send({message: 'NOT FOUND'})
    let users = req.body.users
    return res.status(200).send({users})
}

//Actualizar
function update(req, res){
    if(req.body.error) return res.status(500).send({error})
    if(!req.body.users) return res.status(404).send({message: 'NOT FOUND'})
    let user = req.body.users[0]
    user = Object.assign(user, req.body)
    user.save().then(user => res.status(200).send({message: "UPDATED", user})).catch(error => res.status(500).send({error}))
}

//Borrar
function remove(req, res){
    if(req.body.error) return res.status(500).send({error})
    if(!req.body.users) return res.status(404).send({message: 'NOT FOUND'})
    req.body.users[0].remove().then(user => res.status(200).send({message: "REMOVED", user})).catch(error => res.status(500).send({error}))
}

function find(req, res, next){
    let query = {}
    query[req.params.key] = req.params.value
    User.find(query).then(users => {
        if(!users.length) return next();
        req.body.users = users
        return next();
    }).catch(error => {
        req.body.error = error
        next()
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    remove,
    find
}