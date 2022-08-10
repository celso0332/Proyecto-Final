const { ObjectID } = require("bson");
const { default: mongoose } = require("mongoose");
const {Schema} = mongoose;

const SchemaSucursal = new mongoose.Schema({
    numeroSucursal:Number,
    nombre: String,
    direccion:String,

});



module.exports = mongoose.model('Sucursal',SchemaSucursal,'sucursales');

