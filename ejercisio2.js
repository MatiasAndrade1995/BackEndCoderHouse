// let valoresExponencial = [1, 5, 12, 20, 9];

// let valoresExponenciados = valoresExponencial.map((valor, indice) => {
//     console.log(indice);
//     return valor ** 2;
// });

// console.log(valoresExponenciados);

// let listaSupermercado = ['Fideos', 'Arroz', 'Leche', 'Pan', 'Coca-Cola'];

// let valorABuscar = 'Fideos';

// if (listaSupermercado.includes(valorABuscar)) {
//     console.log('Encontre el valor a buscar');
// } else {
//     console.log('No encontre el valor a buscar');
// }

// let objeto1 = {
//     propiedad1: 'PropiedadObjeto1',
//     propiedad2: 2,
//     propiedad3: true,
// };
// let objeto2 = {
//     propiedad1: 'PropiedadObjeto2',
//     propiedad2: 4,
// };

// let { propiedad1, propiedad2 } = objeto2;

// console.log(propiedad1, propiedad2);

// // spread operator
// let objeto3 = { ...objeto1, ...objeto2 };

// console.log(objeto3);

// //rest operator
// let objeto4 = {
//     a: 1,
//     b: 2,
//     c: 3,
// };

// let { a, b, c, ...pepe } = objeto4;

// console.log(pepe, objeto4);


//ACTIVIDAD CLASE 3


// const objetos = [
//     {
//         manzanas: 3,
//         peras: 2,
//         carne: 1,
//         jugos: 5,
//         dulce: 2

//     },
//     {
//         manzanas: 1,
//         sandias: 1,
//         huevos: 6,
//         jugos: 1,
//         panes: 4
//     }
// ]


// console.log(objetos)

// let pedidos = { objetos }

// console.log(pedidos);



// let keysAndValues = Object.entries(objetos)
// console.log(keysAndValues)

// // let propiedadesProductos = Object.keys(objetos)
// // console.log(propiedadesProductos);

// let valoresProductos = Object.values(objetos)
// console.log(valoresProductos);



// var cantidadTotal = valoresProductos.reduce(({ sum, value }) => (sum + value), 0);
// console.log(cantidadTotal);


// const objetos = [

//     {

//         manzanas: 3,

//         peras: 2,

//         carne: 1,

//         jugos: 5,

//         dulces: 2,

//     },

//     {

//         manzanas: 1,

//         sandias: 1,

//         huevos: 6,

//         jugos: 1,

//         panes: 4,

//     },

// ];

// const tiposDeProductos = [];

// objetos.forEach((objeto) => {

//     const claves = Object.keys(objeto);

//     claves.forEach((clave) => {

//         if (!tiposDeProductos.includes(clave)) {

//             tiposDeProductos.push(clave);

//         }

//     });

// })

// console.log(tiposDeProductos);

// const valoresDeProductos = objetos

//     .map((objeto) => Object.values(objeto))

//     .flat()

// const totalProductosVendidos = valoresDeProductos.reduce(

//     (acumulador, valorActual) => acumulador + valorActual,

// );

// console.log(totalProductosVendidos);






//EJEMPLO PROFE

// let listaCompra1 = {
//     fideo: 300,
//     pepsi: 200,
//     arroz: 500,
//     servilleta: 1000,
//     carne: 600,
// };

// let listaCompra2 = {
//     choclo: 300,
//     arveja: 200,
//     papa: 500,
//     zanahoria: 1000,
//     perejil: 600,
// };

// let listaCompra3 = { ...listaCompra1, ...listaCompra2 };

// let resultadoEntries = Object.entries(listaCompra1);

// console.log(resultadoEntries);

// let resultadoValues = Object.values(listaCompra1);

// console.log(resultadoValues);

// let resultadoKeys = Object.keys(listaCompra1);

// let valorABuscar = 'PERFUME';

// if (resultadoKeys.includes(valorABuscar.toLowerCase())) {
//     console.log('Compraste ' + valorABuscar);
// } else {
//     console.log('Te olvidaste de comprar ' + valorABuscar);
// }

// console.log(listaCompra3);

// let listaCompra3Entries = Object.entries(listaCompra3);

// console.log(listaCompra3Entries);

// let resultadoValues3 = Object.values(listaCompra3);
// let valorGastadoABuscar = 1300;

// if (resultadoValues3.includes(valorGastadoABuscar)) {
//     console.log('GASTASTE ' + valorGastadoABuscar);
// } else {
//     console.log('NO GASTASTE ' + valorGastadoABuscar);
// }


// let mensajeChat = `    HOLAA COMO ESTASSS   `;

// console.log(mensajeChat.trim().length); //QUITA ESPACIOS AL INICIO Y FINAL

// console.log(mensajeChat.trimEnd().length); //QUITA ESPACIOS AL FINAL

// console.log(mensajeChat.trimStart().length); //QUITA ESPACIOS AL INICIO

// let mensajeVacio = `          `;

// console.log(mensajeVacio.trim().length); //NOS DEVUELVE 0 DEBIDO A QUE NO HAY LONGITUD

// let arrayFlatEjemplo = [10, 4, 5, 20, ['A', 400, 20, false], 0, [100, 2000, 5]];

// console.log(arrayFlatEjemplo.flat()); //NOS DEVUELVE UN NUEVO ARRAY CON LOS VALORES





// let variablePrueba = 0;

// // let variableAsignable = variablePrueba || 'Sin Asignar';

// // console.log(variableAsignable);

// let variableNullish = variablePrueba ?? 'Sin Asignar';

// console.log(variableNullish);


// class Persona {
//     #fullName;
//     constructor(nombre, apellido) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.#fullName = `${this.nombre}  ${this.apellido}`;
//     }

//     getFullName = () => {
//         return this.#fullName;
//     };
// }

// let instaciaPersona = new Persona('raul', 'Ahumada');

// console.log(instaciaPersona.getFullName());


// class Persona {
//     #fullName;
//     constructor(nombre, apellido, edad) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//         this.#fullName = `${this.nombre}  ${this.apellido}`;
//     }

//     #getFullName = () => {
//         return this.#fullName;
//     };

//     getNombreCompletoYEdad = () => {
//         return `${this.#fullName}  ${this.edad}`;
//     };
// }

// let instaciaPersona = new Persona('raul', 'Ahumada', 23);

// console.log(instaciaPersona.getNombreCompletoYEdad());

// let objetoA = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// }


// let { a, b, c, ...rest } = objetoA;


// let h =

// {
//     a: objetoA.a,
//     b: objetoA.b
// }


// console.log(rest);