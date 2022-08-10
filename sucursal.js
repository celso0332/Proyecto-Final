require("dotenv").config();

//Registro sucursal
const registroS=function (puesto){
    
     
    const registro= async function(){
       
     await  Sucursal.create({
        numeroSucursal:1,
        nombre: "sucursal1",
        direccion:"Calle 1",
     
    })
}
try {   
if(puesto=="admin"){
            registro()
            return 1  
}
else{
    return 0;
}
        } catch (error) {
            return 0
        }
 }


const mongoose = require("mongoose");
const { Schema } = mongoose;
const Usuario =require("./Models/Usuario")
const Sucursal = require("./Models/Sucursal");
var assert = require("assert");
require('./mongooseconections');

describe("Operaciones con Sucursales", function(){
    describe("Como administrador podrá registrar nuevas sucursales", function(){
        before(async function () {
            await Usuario.create({
               
                nombre:"administrador",
                apellido:"apellido",
                puesto:"admin",
                correo:"admin@ejemplo.com",
                pass:"12345"
          
        });
        })
    it("Registrar con éxito nueva sucursal",async function(){
            const Admin=await Usuario.findOne({correo:"admin@ejemplo.com"});
            console.log(Admin.puesto)
            assert.equal(registroS(Admin.puesto), 1)
    })
    it("Sucursal duplicada en ubicación", async function(){
            var ubicacionAguardar="Calle 1";
            const ubicacion=await Sucursal.findOne({direccion:"Calle 1"})
            var direccion=ubicacion.direccion;
            const duplicada=function(){
                if(ubicacionAguardar==direccion){
                
                    console.log(direccion)
                    return 1;
                }else{
                    return 0;
                }
            }
            assert(duplicada(),1)
    })  
    })
})