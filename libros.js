require("dotenv").config();
const mongoose = require("mongoose");
const { Schema } = mongoose;
var assert = require("assert");
require('./mongooseconections');
const Libro =require("./Models/libros")

const Inventario =require("./Models/Inventario")
describe("Operaciones con inventarios", function(){
    describe("Como supervisor y almacenista de sucursal podrán crear los inventarios de su sucursal", function(){
        it("crear nuevo inventario", function(){
            var listaLibros=["libro1", "libro2"]
            var datos=[numero=1,supervisor="supervisor1",lista=listaLibros]
            const crear= async function(){
               try{
                    await Inventario.create({
                        numero:1,
                        supervisor:"supervisor1",
                        listaLibros:["libro1","libro2"] 
                    })
                  
                    return 1
                }
                catch(error){
                    return 0
                }
            }
            const CrearInventario=function(){
             try {
                crear()
                return 1
             } catch (error) {
                return 0
             }
            }
            assert.equal(CrearInventario(), 1)
        })
        
    })
    describe("Como almacenistas podrán agregar y editar libros dentro del inventario", function(){
        it("Agregar libros nuevos",async function(){
            const inventario=await Inventario.find()
            console.log(inventario)

            assert.equal(1,1)
        })

    })
})