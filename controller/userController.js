const User = require('../model/user');
const secret = require('../config/auth.json')
const jwt = require('jsonwebtoken')

const createUser = async (req, res) => {
    const { name, password, email } = req.body;
    await User.create({
        name: name,
        password: password,
        email: email
    }).then(() => {
        res.json('Cadastro de usuário realizado com sucesso!');
        console.log('Cadastro de usuário realizado com sucesso!');
    }).catch((erro) => {
        res.error();
        console.log(`Ops, deu erro: ${erro}`);
    })
}

const authenticatedUser = async (req, res) =>{
    const {email, password} = req.body;
    try {
        const isUserAthenticated = await User.findOne({
            where:{
                email: email,
                password:password
            }
        })
        const token = jwt.sign({id:email}, secret.secret, {
            expiresIn:86400,
        })
        return res.json({
            name: isUserAthenticated.name,
            name: isUserAthenticated.email,
            token: token
        });
    }catch (error){
        return res.json('Usuário nao encontrado');
    }
}

const searchUsers = async (req, res) => {
    const users = await User.findAll()
        res.json(users);
}

const deleteUser = async(req, res) =>{
    const id = parseInt(req.params.id);
    await User.destroy({
            where:{
                id:id
            }
    })
}

const updateUser = async(req, res) =>{
    const id = parseInt(req.params.id);
    const { name, password, email } = req.body;
    await User.update({
        name: name,
        password: password,
        email:email
    },
    {where: {
        id:id
    }
    })
}

module.exports = { createUser, searchUsers, authenticatedUser, deleteUser, updateUser };