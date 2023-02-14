// Ejercicio 1: escribir una programa con cuatro funciones de flecha: sumar, restar, multiplicar y dividir (cada una de ellas debe aceptar dos parámetros y devolver el resultado). Posteriormente invocar a las cuatro funciones con valores arbitrarios.


const sumar = (op1, op2, callback) => {
    callback (op1 + op2);
};
// sumar (2,4,(resultado) => {
//  console.log(resultado);
//  }); 

setTimeout(() => {
    sumar (2,4,(resultado) => {
        console.log(resultado);
         }); 
}, 1000);

  // console.log(suma(34,44))
 const restar = (op1, op2, callback) => {
     callback (op1 - op2);
 };
 // restar (50,25, (resultado)  => {
 //  console.log(resultado); })
 // console.log(resta(35,20))

 setTimeout(() => {
    restar (50,25,(resultado) => {
        console.log(resultado);
         }); 
}, 2000);

 const multiplicar = (op1, op2, callback) => {
     callback (op1 * op2);
 };
// multiplicar (5,2, (resultado) => {
//    console.log(resultado);
// })
// console.log(multiplicar(2,5))

setTimeout(() => {
    multiplicar (2,5,(resultado) => {
        console.log(resultado);
         }); 
}, 3000);

 const dividir = (op1, op2, callback) => {
     callback (op1 / op2);
 };
//  dividir (30, 6, (resultado) => { 
//      console.log(resultado);
//  });

setTimeout(() => {
    dividir (30,6,(resultado) => {
        console.log(resultado);
         }); 
}, 4000);