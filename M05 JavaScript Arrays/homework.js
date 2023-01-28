/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   //return dePalabrasAFrase[0]
   return array[0]
}
devolverPrimerElemento([1,2,3,4,9,'ok'])

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length-1]
}
devolverUltimoElemento([1,2,3,'pl'])
   

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}
obtenerLargoDelArray([1,2,3,4,6,'o'])

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

   // EXISTEN DOS FORMAS DE USAR MAP
   // --- PRIMERA FORMA ---
   //const y =array.map(function(x){return x*9}) 
   //return y
   
   // --- SEGUNDA FORMA ---
   const y =array.map(x=>x+1)
   return y
   }

incrementarPorUno([1,2,3])

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento)
   return array
}
agregarItemAlFinalDelArray([1,2,3],4)

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array
}
agregarItemAlComienzoDelArray([1,2,3],0)

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var y = palabras.join(' ')
   return y
}
dePalabrasAFrase(['Hola','Erik','!'])

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
   if (array.includes(elemento)) return true
   else return false
}
arrayContiene([1,2,3],0)

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:

   var resp = arrayOfNums.reduce((acum,item)=>{
      return acum=acum+item
   })
   return resp
}
agregarNumeros([1,2,3])

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var resp = resultadosTest.reduce((acum,item)=>{
      return acum=acum+item
   })
   return resp/resultadosTest.length
}
promedioResultadosTest([10,20,30])


function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   return Math.max(...arrayOfNums) // para citar todo un arreglo se tiene que colocar los tres puntos antes de arreglo
}
numeroMasGrande([10,15,11,16.1])

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

let acc=1
if(arguments.length ===0) return 0
else if(arguments.length === 1) return arguments [0]
else {
   for(var i= 0; i< arguments.length; i++){
      acc=arguments[i]*acc
      }
      return acc
      }
}
multiplicarArgumentos(10,2,3)

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let arreglo =  array.filter((e)=>e>18)
   return arreglo.length
}
cuentoElementos([19,20,2,4,1])

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia===2|| numeroDeDia===3 || numeroDeDia===4 || numeroDeDia===5|| numeroDeDia===6) return 'Es dia laboral'
   else return 'Es fin de semana'
}
diaDeLaSemana(7)

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   var numero = String(num).split("").map(con => {return Number(con)} )
   if (numero[0]===9) return true
   else return false
 }
empiezaConNueve(91239)

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
  
   for (let i = 0; i<=array.length-1;i++){
   var busqueda = array.filter(elemento=>elemento !== array[i]) // filter--> busca el elemento que se le indique, si no encuentra lo muesta se muestra vacio
 // para este ejemplo, el elemento, toma el ultimo valor del array y lo compara con los demas y verifica si son iguales o diferentes de este.
}
   if (busqueda=='') return true
   else return false
}
todosIguales([3,3,3,4])

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   const meses = array.filter(m=>m=='Enero'|| m=='Marzo' || m== 'Noviembre')
   if (meses.length<3) return "No se encontraron los meses pedidos"
   else return meses 
}
mesesDelAño(['diciembre','abril','Noviembre'])

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var array = [0,1,2,3,4,5,6,7,8,9,10]
   var tabla = array.map(x=>x*6)
   return tabla 
}
tablaDelSeis()

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var num = array.filter(n=>n>100)
   return num
}
mayorACien([12,85,100,101,200,150])
/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var lista = []
   for (let i =1; i<=10;i++){
      num=num+2
      lista.push(num)  
      switch (num===lista[num-1]) {
      case true:
       return "Se interrumpió la ejecución"
       break;
      }}
 return lista
 }
breakStatement(2)

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var lista = []
   for (let i =1; i<=10;i++){
      if (i==5) continue   
      num=num+2
      lista.push(num)   
 }
   return lista
 }
 continueStatement(2)


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
