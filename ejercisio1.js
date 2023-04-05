const arreglo = [1, 2, 3, 4, 5, "este es un string", { name: "matias", edad: 2 }]

const mostrarLista = () => arreglo.length == 0 ? 'Lista vacia' : arreglo.filter((elemento) => typeof elemento == "string")

console.log(mostrarLista());