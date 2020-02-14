const express = require('express');

const UsuarioSchema = require('../models/Usuario');
const SeasonSchema = require('../models/Season');
const ControlePontosSchema = require('../models/ControlePontos');
const UsuarioPontosSchema = require('../models/UsuarioPontos');

const router = express.Router();

router.post('/create', async (req, res) => {
  try {
    const { ano, semestre } = req.body;

    //Buscando Usuarios
    const usuarios = await UsuarioSchema.find();

    //Criando ControlePontos
    const controlePontos = await ControlePontosSchema.create({
      controle_pontos: []
    });

    //criando cada usuario, zerando os pontos
    await Promise.all(
      usuarios.map(async usuario => {
        const usuarioPontos = new UsuarioPontosSchema({
          usuario: usuario._id,
          controle_pontos: controlePontos._id,
          pontos: 0,
          partidasJogadas: 0,
          primeiro: 0,
          segundo: 0,
          terceiro: 0,
          ultimo: 0
        });
        await usuarioPontos.save();
        controlePontos.usuarios_pontos.push(usuarioPontos);
      })
    );
    await controlePontos.save();

    //Criando season
    const season = await SeasonSchema.create({
      ano,
      semestre,
      controle_pontos: controlePontos
    });

    res.send({ season });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: 'Erro ao criar season' });
  }
});

module.exports = app => app.use('/season', router);
