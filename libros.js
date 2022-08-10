require("dotenv").config();
const mongoose = require("mongoose");
const { Schema } = mongoose;
var assert = require("assert");
require('./mongooseconections');
const Libro =require("./Models/libros")
describe("Operaciones con libros", function(){
    describe("Como supervisor y almacenista de sucursal podrán crear los inventarios de su sucursal", function(){
        it("crear nuevo inventario", function(){
            var listaLibros=["libro1", "libro2"]
            var datos=[numero=1,supervisor="supervisor1",lista=listaLibros]
            const crear= async function(){
                await Libro.create({
                    numero:datos.numero,
                    supervisor:datos.supervisor,
                    listaLibros:datos.lista 
                })
            }
            const CrearInventario=function(){
                try {
                    crear()
                    assert(True)
                } catch (error) {
                    assert(False)
                }
            }
            
            
        })
    })
})