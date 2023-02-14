// var alert1 = 5;
// // permitido
// var alert1 = '';
// let alert2 = 5;
// // no permitido porque ya se declaró antes
// let alert2 = 5;

// let entero= prompt ("escribe un numero entero positivo");
// for (let i = entero; i >= 0; i--) {
//     if (i>=0) {
//         document.write ( i + ", ");
//     } else {
//         document.write (i);
//     }
// }

// let i= 0;
// while (i<=50) {
//     console.log(i)
//     i++;
// }

// let i= 50;
// while (i>= 0) {
//     console.log(i)
//     i--;
// }

//   let i= 0;
//   while (i<=10) {
//       document.write ("7 x" + i + " = " + i*7 + "<br>");
//       i++;
//   }

// let str1 = "rosado", str2 = "acabado";
//     if (str1.charAt(0) === str2.charAt(0)) {
//         console.log ("si tienen la primera y ultima letra igual")
//     } else {
//         console.log ("no tienen la primera y ultima letra igual")
//     }

// let palabra = "color abc amarillo"; 
// if (palabra.search(/[abc]/) == palabra.charAt(0)); {
//      console.log("la palabra abc existe"); 

// } else if (palabra.search(/[abc]/) == palabra.search(palabra.length-1)) {
//     console.log("la palabra abc no existe");
//     } 

// if (palabra.search(/[abc]/) == palabra.search(palabra.length-1)); {
//     console.log("la palabra abc existe");

//     } else {
//     console.log("la palabra abc no existe");
//     }

// let palabra = "zzzabczzz";;
// console.log(palabra.indexOf("abc"));
// console.log(palabra.indexOf("abc",palabra.length-3));

//  if (palabra.indexOf("abc") == 0) {
//      console.log("NO VÁLIDA");
//  } else if (palabra.indexOf("abc",palabra.length-3) == palabra.length-3) {
//      console.log("NO VÁLIDA");
//  } else if (palabra.indexOf("abc") == -1) {
//      console.log("NO VÁLIDA");
//  } else {
//      console.log("VÁLIDA");
//  }

// let posicion = 4; 
//     let frase = 'holanada';
//     let letra1;
//     let letra2;

//     letra1  = frase.charAt((posicion+1));
//     letra2 =  frase.charAt((posicion-1));

//     if(letra1 == letra2){
//         document.write('En la posicion '+ posicion + ' las letras son iguales.');
//     } else{
//         document.write('En la posicion '+ posicion + ' las letras no son iguales');
//     }

// let coches = ["BMW", "Audi", "Jeep"];

// coches.push('Renault');

// console.log(coches);

// console.log(coches.unshift('Volvo'));

// console.log(coches);

// console.log(coches.pop());

// console.log(coches);

// let programas = ["Adobe", "CSS", "HTML"];
// for (let programa of programas);
//     console.log(programas); {
// }

// programas.push('Python'); {
//     console.log(programas);
// }

// programas.unshift('C++'); {
//     console.log(programas);
// }

// console.log(programas.pop()); 

// console.log(programas);

// console.log(programas.shift());

// console.log(programas);

// programas.splice(0, 2, 'Java', 'PHP')
// console.log(programas);
// console.log(programas.slice(1,2));

// let edades = ["18", "24", "36", "48"];
// for (let i= 0; i < edades.length; i++) {
//     console.log(edades[i]);
// } 

// for (const edad of edades) {
//     console.log(edad);
// }

// let colores = ["Yellow", "Black", "Blue"];
// let colores3 = [];

// console.log(colores);
// console.log(colores3);

// for (const color of colores) {
//     colores3.push(color);
//     console.log(colores3);
// }

// console.log(colores3);

// let similar = ["Azul", "Blanco", "Rojo"];
// let similar2 = ["Amarillo", "Azul", "Rosado"];

// for (const similar of similar2) {
//     console.log(similar);
//     console.log(similar2);
// }

// const objeto = {
//     name: 'Rebecca',
//     diHola: () => {
//     console.log('hola');
//     }
//     };
//     objeto.diHola();