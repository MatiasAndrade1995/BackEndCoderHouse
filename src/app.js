// Desafio Entregable 3 - Andrade Matias

const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())

const ProductManager = require("./ProductManager")

const productManager = new ProductManager();

app.get("/products", async (req, res) => {
    let { limit } = req.query
    const products = await productManager.getProducts()
    if (limit) {
        if (limit >= products.length || limit < 0) {
            res.send(products)
        } else {
            res.send(products.slice(0, limit))
        }
    } else {
        res.send(products)
    }
})

app.get("/products/:pid", async (req, res) => {
    const { pid } = req.params
    const product = await productManager.getProductById(pid)
    if (product) {
        res.send(product)
    } else {
        res.send({ error: "Not found" })
    }
})

const port = 8080;

app.listen(port, () => {
    console.log(`El servidor esta escuchando en http://localhost:${port}`)
})