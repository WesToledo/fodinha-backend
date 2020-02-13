const express = require('express');

const UsuarioSchema = require('../models/Usuario');

const router = express.Router();

router.post('/create', (req, res) => {
  try {
    const usuario = UsuarioSchema.create(req.body);

    return res.send(usuario);
  } catch (err) {
    res.status(400).send({ error: 'Erro ao criar usuário' });
  }
});

router.get('/', async (req, res) => {
  try {
    const usuarios = await UsuarioSchema.find();

    return res.send(usuarios);
  } catch (err) {
    res.status(400).send({ error: 'Erro ao listar usuários', err });
    console.log(err);
  }
});

module.exports = app => app.use('/usuarios', router);
