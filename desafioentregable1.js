//Desafio Entregable 1 - Andrade Matias

class ProductManager {

    #products

    constructor() {
        this.#products = []
    }

    addProduct = (title, description, price, thumbnail, code, stock,) => {

        if (title === undefined || description === undefined || price === undefined || thumbnail === undefined || code === undefined || stock === undefined) {
            console.log("All fields are required")
            return;
        }

        const objectWithCode = this.#products.find(element => element.code == code)
        if (objectWithCode) {
            console.log(`ERROR... The product with this Code: ${code} already exists`)

        } else {

            const id = this.#products.length == 0 ? 1 : this.#products[this.#products.length - 1].id + 1

            this.#products.push({
                id,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            })

        }
    }

    updateProduct = (id, modify) => {
        let indexProduct = this.#products.findIndex(el => el.id == id)
        const objectModified = this.#products[indexProduct] = { ...this.#products[indexProduct], ...modify }
        console.log(objectModified)

    };

    getProducts = () => {
        console.log(this.#products);
        return this.#products;
    }

    getProductById = (id) => {
        const objectWithId = this.#products.find(obj => obj.id == id)

        if (objectWithId) {

            console.log(objectWithId)
            return objectWithId;

        } else {
            console.log('Not Found')
        }

    }

}

//Proceso Testing 

let productManager = new ProductManager();

productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin Imagen", "abc123") // Ejecuto metodo addProduct sin todos los campos para probar la validación.

productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin Imagen", "abc123", 0) // Ejecuto metodo addProduct de la clase para agregar producto.

productManager.getProductById(1)

productManager.updateProduct(1, { title: "producto prueba2", stock: 2 })

productManager.getProductById(1)