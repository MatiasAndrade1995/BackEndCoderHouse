//Entrega 1 - Andrade Matias

class ProductManager {
    #name

    constructor() {
        this.products = []
    }

    addProduct = (title, description, price, thumbail, code, stock,) => {

        if (title === undefined || description === undefined || price === undefined || thumbail === undefined || code === undefined || stock === undefined) {
            console.log("Todos los campos son requeridos")
            return;
        }

        const objectWithCode = this.products.find(element => element.code == code)
        if (objectWithCode) {
            console.log("ERROR... Este producto ya existe")

        } else {

            const id = this.products.length == 0 ? 1 : this.products[this.products.length - 1].id + 1

            this.products.push({
                id,
                title,
                description,
                price,
                thumbail,
                code,
                stock

            })
        }
    }

    getProducts = () => this.products;

    getProductById = (id) => {
        const objectWithId = this.products.find(obj => obj.id == id)

        if (objectWithId) {

            return objectWithId;

        } else {
            console.log('Not Found')
        }

    }

}

//Proceso Testing 

let productoPrueba1 = new ProductManager();

console.log(productoPrueba1.getProducts()); //Trae array vacío ya que todavia no hay producto agregado.

productoPrueba1.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin Imagen", "abc123", 0) // Ejecuto metodo addProduct de la clase para agregar producto.

productoPrueba1.addProduct("producto prueba", "Este es un producto prueba", "Sin Imagen", "abc123", 25) // Ejecuto metodo addProduct de la clase para agregar producto. Este al ser enviado sin el price, crea un mensaje por consola que indica que todos los campos son requeridos para ser agregado.

console.log(productoPrueba1.getProducts());

productoPrueba1.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin Imagen", "abc123", 25) // Ejecuto nuevamente el addProduct de la clase para agregar producto. Sin embargo, este no se agrega porque contiene el mismo código.

console.log(productoPrueba1.getProductById(1)) // Como el producto con el ID 1 existe, me retorna el producto.

productoPrueba1.getProductById(2) // Como el producto con el ID 2 no existe, me devuelve en la consola Not Found.