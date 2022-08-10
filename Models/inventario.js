
const Libro =require("./libros")
const { ObjectID } = require("bson");
const { default: mongoose } = require("mongoose");
const {Schema} = mongoose;
const SchemaInventario=new mongoose.Schema({
    numero:String,
    supervisor:String,
    listaLibros:[String]
})

module.exports = mongoose.model('Inventario',SchemaInventario,'inventarios');
