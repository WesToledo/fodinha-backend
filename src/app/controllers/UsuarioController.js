const express = require('express');

const UsuarioSchema = require('../models/Usuario');

const router = express.Router();

router.post('/create', async (req, res) => {
  try {
    const { nickname } = req.body;

    if (await UsuarioSchema.findOne({ nickname })) {
      return res.status(400).send({ error: 'Nickname já existente' });
    }
    
    const usuario = await UsuarioSchema.create(req.body);

    return res.send({ usuario });
  } catch (err) {
    return res.status(400).send({ error: 'Erro ao criar usuário' });
  }
});

router.get('/', async (req, res) => {
  try {
    const usuarios = await UsuarioSchema.find();

    return res.send({ usuarios });
  } catch (err) {
    return res.status(400).send({ error: 'Erro ao listar usuários', err });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    await UsuarioSchema.findByIdAndRemove(req.params.id);

    return res.send();
  } catch (err) {
    res.status(400).send({ error: 'Erro ao deletar usuário' });
  }
});

module.exports = app => app.use('/usuarios', router);
