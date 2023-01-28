/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   if(x===y) return x || y;
   if(x>y) return x;
   else return y
}
obtenerMayor(8,8)

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   if(edad >=18) return 'Allowed'
   else return 'Not allowed'
}
mayoriaDeEdad(17)

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   if (status === 1) return 'Online'
   if (status === 2) return 'Away'
   else return 'Offline'
}
conection(8)

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:

   //var x=[{key:'aleman',lengua: "Guten Tag!"},
           // {key:"mandarin",lengua: "Ni Hao!"},
            //{key:"ingles",lengua: "Hello!"},
            //{key:undefined,lengua: "Hola!"}]
   //var y =x.find(habla=> habla.key===idioma)
   //return y
   var x=['aleman','mandarin','ingles']
   var y =x.find(lengua => lengua === idioma)
   if(y==='aleman') return 'Guten Tag!'
   if(y==='mandarin') return 'Ni Hao!'
   if(y === 'ingles') return 'Hello!'
   else return 'Hola!'
}
saludo('ingles')

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:

   var colores =['blue','red','green','orange']
   var elegir = colores.find(elemento=>elemento===color)
      switch(color){
         case 'blue':
            return 'This is blue'
            break

         case 'red':
            return 'This is red'
            break

         case 'green':
            return 'This is green'
            break

         case 'orange':
            return 'This is orange'
            break
         default:
            return "Color not found"
         }
      
}

colors('red')

function esDiezOCinco(num) {
   // Retornar "true" si "num" es 10 o 5.
   // De lo contrario, retornar "false".
   // Tu código:
   if(num ===5 || num === 10)
   return true
   else
   return false
}
esDiezOCinco(47)

function estaEnRango(num) {
   // Retornar "true" si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar "false".
   // Tu código:
   if(num >20 && num < 50) return true
   else return false
}
estaEnRango(50)

function esEntero(num) {
   // Retornar "true" si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna "false".
   // Tu código:
   var x = num
   var y = Math.round(num)

   if(x===y) return true
   else return false
   
}
esEntero(4.2)

function fizzBuzz(num) {
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // De lo contrario, retorna el número.
   // Tu código:
   if(num % 3 === 0 && num % 5 === 0) return 'fizzbuzz'
   if(num % 3 === 0) return 'fizz'
   if(num % 5 === 0) return 'buzz'
   else return num
}
fizzBuzz(2)

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si alguno de los argumentos es cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   if(num1===0 || num2===0 || num3===0) return 'Error'

   else if(num1===num2===num3) return 'false'
   
   else{
      if (num1<0 || num2<0 || num3<0) return 'Hay negativos'
      else if (num1>num2 && num3) return "Numero 1 es mayor y positivo"
      
      else if (num3>num1&&num2){
         num3=num3+1
         return num3
      }
      
      else return false
   }
    
}
operadoresLogicos(3,-5,0)

function esPrimo(num) {
   // Retornar True si "num" es primo.
   // De lo contrario retorna False.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   const listaresto=[] 
   if(num!=1 && num!=0 && num>0){
       for(var i=1; i<=num; i++) {
           if (num%i === 0){  
               listaresto.push(i) // Cuando se coloca dentro del for el PUSH, se adiciona los elementos dentro de la lista, pero cuando está fuera solo muestra la última iteración.
           }
       }     
       }  
       if(listaresto.length === 2) return true
       else return false 
}
esPrimo(9)

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   if(valor === true || valor === 1) return 'Soy verdadero'
   else return 'Soy falso'
}
esVerdadero(1)

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar True.
   // Caso contrario, retornar False.
   // Tu código:
   var texnum = num.toString()
   var x = texnum.length
   if (x === 3) return true
   else return false
}
tieneTresDigitos(1023)

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   var suma = 0
   var i = 0
   var sum =num+5
   do{
      i=i+5;
      suma = num+i; 
   } while (i<=35)
   return suma   
}
console.log(doWhile(3))
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
