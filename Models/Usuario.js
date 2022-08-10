const { ObjectID } = require("bson");
const { default: mongoose } = require("mongoose");
const {Schema} = mongoose;
const SchemaUsuario=new mongoose.Schema({
    nombre:String,
    apellido:String,
    puesto:String,
    correo:String,
    pass:String
})

module.exports = mongoose.model('Usuario',SchemaUsuario,'usuarios');
