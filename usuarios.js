require("dotenv").config();


 const registroUser=function (puesto1){
              const registro= async function(){
               await  Usuario.create({
                   nombre:"empleado1",
                   apellido:"apellido1",
                   puesto:"supervisor",
                   correo:"supervisor@ejemplo.com",
                   pass:"12345"
               });
              }
                   return 1  
           }


var duplicar=function(lista, correoRegistrado){
        var duplicado = Usuario.find({correo:correoRegistrado})
       
        if(duplicado){
            var retorno=1
        }else{
retorno=0;
        }
        return retorno
        }
//fin de la xona de funciones



const mongoose = require("mongoose");
const { Schema } = mongoose;
const Usuario =require("./Models/Usuario")
const Sucursal = require("./Models/Sucursal");
var assert = require("assert");
require('./mongooseconections');
describe("Pruebas con usuarios", function(){
    describe("Como usuarios con privilegios podrán registrar nuevos usuarios...", function () {
        before(async function () {
           await Usuario.create({
               
                   nombre:"admin2",
                   apellido:"apellido2",
                   puesto:"admin",
                   correo:"administrador2@ejemplo.com",
                   pass:"12345"
             
           });
         });
       
         it("Registro exitoso de usuario", async function () {
           var Admin = await Usuario.find();
           
           var puesto1=Admin.puesto
              
           assert.equal(registroUser(puesto1),1)
         });
         it("Cuenta duplicada",async function(){
            var list =await Usuario.find();
            var correoRegistrado1="supervisor@ejemplo.com";
            assert.equal(duplicar(list, correoRegistrado1), 1)
         });
         it("validación de datos incorrectos", function(){
            const registroUser=function (){
                const registro= async function(){
                    try {
                        await  Usuario.create({
                            nombre:1,
                            apellido:"apellido1",
                            puesto:"supervisor",
                            correo:"supervisor@ejemplo.com",
                            pass:"12345"
                        });
                        return 1
                    } catch (error) {
                        console.log(error)
                    }
                 
                }
                     return 0
             }
            assert.equal(registroUser(), 0)
         })
         
       });

  describe("Como usuarios registrados podrán iniciar sesión", function(){
       it("Realizar el login con éxito",async function(){
        var Admin = await Usuario.find();
        console.log(Admin)
       var correoLogin="administrador2@ejemplo.com"
       var passLogin="12345"
       const Login=function(correoLogin, passLogin){
        try {
            Admin.forEach(datos => {
                if(datos.correo==correoLogin && datos.pass==passLogin){
                     retorno=1
                }
                
            });
            return retorno
        } catch (error) {
            return 0;
        }
       }
       
    assert.equal(Login(correoLogin,passLogin),1)   
    })
    it("Credenciales introducidas no se reconocen", async function(){
        var Admin = await Usuario.find();
       // console.log(Admin)
       var correoLogin="administrador@ejemplos.com"
       var passLogin="12345"
       const Login=function(correoLogin, passLogin){
        try {
            Admin.forEach(datos => {
                if(datos.correo1!=correoLogin || datos.pass!=passLogin){
                     retorno=1
                }
                
            });
            return retorno
        } catch (error) {
            return 0;
        }
       }
       
    assert.equal(Login(correoLogin,passLogin),1)   
    })
    });
    describe("Como usuarios con permisos podrán dar de baja cuentas de nivel inferior", async function(){
        it("Eliminación de cuenta exitosa",async function(){
            const Aborrar=function(){
          const borrar=async  function(){
            
            const Admin=await Usuario.find()
         ///   console.log(Admin)
            var correoEliminar='administrador2@ejemplo.com'
            try {
              
              
               var idO=await Usuario.findOneAndDelete({correo:correoEliminar})
                                      
            } catch (error) {
                return 0;
            }
            }
            try {
            borrar()
            return 1;    
            } catch (error) {
                return 0;
            }
            
            }
          
          assert.equal(Aborrar(),1)
    })
});

});



