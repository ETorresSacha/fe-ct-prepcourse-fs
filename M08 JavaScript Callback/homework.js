/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   return nombre.charAt(0).toUpperCase(nombre)+ nombre.slice(1)
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb()
   
   // Callback --> sirve para que un determinado codigo no se ejecute si es que el otro codigo no haya terminado
   // https://www.youtube.com/watch?v=zQVnDW8SaA0
}


function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
 
  return cb(num1,num2)
}
function cb(num1,num2){
   this.num1=num1
   this.num2=num2
   return this.num1+this.num2
}
operacionMatematica(4,5,cb)

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

 var suma = arrayOfNumbers.reduce((acum,item)=>{
   return acum=acum+item})
   
   cb(suma);


  
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   array.forEach((Element)=>{
      cb(Element);
   })
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
  
  // let nuevoArreglo = []
  //for (let i=0; i<array.length;i++){
  // nuevoArreglo.push(cb(array[i]))
  //}
//return nuevoArreglo

//array.forEach(Element=>{
  // nuevoArreglo.push(cb(Element))
//})

nuevoArreglo = array.map((Element)=>{
   return cb(Element)
})

return nuevoArreglo

}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   //let nuevoArreglo=[];
   //arrayOfStrings.forEach((Element)=>{
     // if(Element.charAt(0)==='a'){
      //   nuevoArreglo.push(Element);
     // }

   //})
  // return nuevoArreglo;

  let nuevoArreglo = arrayOfStrings.filter(Element=>Element[0]==='a')
  return nuevoArreglo

  // nota: el filter crea un nuevo arreglo con los elementos que solo cumple la funccion

}
console.log(filter([a,b,a,g,s,a]))
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
