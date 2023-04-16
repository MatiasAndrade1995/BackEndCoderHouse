//Desafio Entregable 2 - Andrade Matias

const fs = require('fs');

class ProductManager {

    #products

    constructor() {
        this.#products = [];
        this.path = './products.json'
    }

    getProducts = async () => {
        try {
            let res = await fs.promises.readFile(this.path, 'utf-8')
            console.log(JSON.parse(res));
            return JSON.parse(res);
        } catch (res) {
            console.log(`${JSON.stringify(this.#products)} ------ Array empty`)
        }
    }


    addProduct = async (title, description, price, thumbnail, code, stock,) => {
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
            const writeNewProduct = async () => {
                try {
                    await fs.promises.writeFile(this.path, JSON.stringify(this.#products), 'utf-8')
                    console.log("Write successfully")
                } catch {
                    console.log("Write error")
                }

            }
            await writeNewProduct();
        }
    }

    updateProduct = async (id, modify) => {
        let indexProduct = this.#products.findIndex(el => el.id == id)
        const objectModified = this.#products[indexProduct] = { ...this.#products[indexProduct], ...modify }
        console.log(objectModified)
        await fs.promises.writeFile(this.path, JSON.stringify(this.#products), 'utf-8')
        console.log(`Object with ID ${id} has been modify ${JSON.stringify(objectModified)}`)
    };


    getProductById = async (id) => {
        const objectWithId = this.#products.find(obj => obj.id == id)
        if (objectWithId) {
            console.log(objectWithId)
            return objectWithId;
        } else {
            console.log('Not Found')
        }
    }

    deleteProduct = async (id) => {
        let dataFile = [];
        let data = await fs.promises.readFile(this.path, 'utf-8')
        if (!data) {
            console.log('Error read')
        } else {
            dataFile = JSON.parse(data)
            console.log(dataFile)
            dataFile = dataFile.filter((obj) => {
                return obj.id != id
            })
            await fs.promises.writeFile(this.path, JSON.stringify(dataFile), 'utf-8')
            console.log(`Delete successfully`)
            console.log(dataFile)
        }
    }
}

//Procces Testing

let productManager = new ProductManager();

const test = async () => {

    productManager.getProducts();
    await productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin Imagen", "abc123", 0)
    await productManager.addProduct("producto prueba 2", "Este es un producto prueba", 200, "Sin Imagen", "abc1234", 0)
    await productManager.getProductById(1);
    await productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin Imagen", "abc12345", 0)
    await productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin Imagen", "abc12345", 0)
    await productManager.updateProduct(2, { title: "PRODUCTO MODIFICADO", stock: 1000 })
    await productManager.deleteProduct(1)

}

test();