/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   var objeto = {
      nombre : nombre,
      edad : edad,
      meow : function(){
         return "Meow!"
      },
   }
   return objeto;
}
crearGato('hola',15)

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   var obj = {};
   var datos = function(dat1,dat2,dat3){
      obj[dat1]=nombre
      obj[dat2]=email
      obj[dat3]=password

   }
   datos('nombre','email','password')
   return obj
}
nuevoUsuario('erik','erik_10@hotmsil.com',123)

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad]=null
   return objeto
}
var objeto = {}
agregarPropiedad(objeto,'ciudad')

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   //console.log(objeto[metodo])
    return objeto[metodo]()
}
var objeto={deporte:'futbol',pais:function(){return 'hola'}}
invocarMetodo(objeto,'pais')


function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   var re =objetoMisterioso.numeroMisterioso*5
   return re
}
var objetoMisterioso = {numeroMisterioso:4}
multiplicarNumeroDesconocidoPorCinco(objetoMisterioso)

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   //console.log(objeto[propiedad])
   delete objeto[propiedad]
   return objeto
}
var objeto = {deporte:'futbol',nombre:'teffa'}
eliminarPropiedad(objeto,'nombre')

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar True. Caso contrario, False.
   // Tu código:
   //return objetoUsuario.email
   if (objetoUsuario.email == undefined ) return false
   else return true
}
var objetoUsuario = {
   nombre:'erik',
   email:'',
   contraseña:123,
}
tieneEmail(objetoUsuario)

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar True. Caso contrario, False.
   // Tu código:
   //console.log(propiedad)
   //return (objeto[propiedad])

   if (objeto[propiedad]===undefined) return false // OJO: Con los corchetes se llama al valor del nombre de la propiedad, cuando tiene una funcion se le llama a la funcion
   else return true

}
var objeto = {pais:'peru', deporte:'futbol'}
tienePropiedad(objeto,'deporte')

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar True. Caso contrario, False.
   // Tu código:
   if (objetoUsuario.password === password) return true
   else return false
}
var objetoUsuario ={nombre:'erik',
password: 123}
verificarPassword(objetoUsuario,1234)

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.password=nuevaPassword
   return objetoUsuario
}
var objetoUsuario = {nombre:'erik',password:123}
console.log(actualizarPassword(objetoUsuario,1234))

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo)
   return objetoUsuario

}
var objetoUsuario = {
   usuario:'erik',
   contraseña :123,
   amigos:['fisher','mauricio']}

agregarAmigo(objetoUsuario,'jheny')

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como True.
   // Retornar el arreglo.
   // Tu código:
   //return objetoMuchosUsuarios
   //objetoMuchosUsuarios.usuarios.erik.esPremium=true
   for(let user of objetoMuchosUsuarios){
      user.esPremium = true
   }
   return objetoMuchosUsuarios

}

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   let totalLikes=0;
   // bojetousuario ={...,posts:[{...,likes:10},{...,likes:2},{...,likes:9}]}
   objetoUsuario.posts.forEach((post)=>(totalLikes += post.likes))
   return totalLikes;
}


function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   objetoProducto.calcularPrecioDescuento=function(){
      const descuento = objetoProducto.precio*objetoProducto.porcentajeDeDescuento
      objetoProducto['precio final']=objetoProducto.precio-descuento
      return objetoProducto['precio final']
   }
   return objetoProducto
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
