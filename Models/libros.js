const { ObjectID } = require("bson");
const { default: mongoose } = require("mongoose");
const {Schema} = mongoose;
const SchemaLibro=new mongoose.Schema({
    Titulo:String,
    Autor:String,
    
})

module.exports = mongoose.model('Libro',SchemaLibro,'libros');
