const mongoose = require('../../database/index');

const UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true
  },
  nickname: {
    type: String,
    require: true,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  admin: {
    type: Boolean,
    default: false,
    require: true
  },
  manager: {
    type: Boolean,
    default: false,
    require: true
  }
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);
module.exports = Usuario;
