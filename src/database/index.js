const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fodinhaDB');
mongoose.Promise = global.Promise;

module.exports = mongoose;