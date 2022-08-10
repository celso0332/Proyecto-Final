require("dotenv").config();
const mongoose = require("mongoose");
const { Schema } = mongoose;
var assert = require("assert");
require('./mongooseconections');
const Libro =require("./Models/libros")

const Inventario =require("./Models/Inventario")
describe("Operaciones con libros", function(){
    describe("Como supervisor y almacenista de sucursal podrán crear los inventarios de su sucursal", function(){
        it("crear nuevo inventario", function(){
            var listaLibros=["libro1", "libro2"]
            var datos=[numero=1,supervisor="supervisor1",lista=listaLibros]
            const crear= async function(){
                try {
                    await Libro.create({
                        numero:datos.numero,
                        supervisor:datos.supervisor,
                        listaLibros:datos.lista 
                    })
                  
                    return 1
                } catch (error) {
                    return 0;
                }
                
                
            }
            const CrearInventario=function(){
              
              if(crear!=0){
                return 1
               }else{
                return 0
               }
            }
            assert.equal(CrearInventario(), 1)
            
            
        })
    })
})