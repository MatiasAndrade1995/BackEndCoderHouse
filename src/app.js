// DESAFIO ENTREGABLE -  Websockets + Handlebars - ANDRADE MATIAS
require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

//Http import
const http = require('http')
const server = http.createServer(app)

//Import Routes
app.use('/api', require('./routes/products'))
app.use('/api', require('./routes/carts'))
app.use('/api', require('./routes/messages'))

// app.use('/images', require('./routes/multer'))

//Import models
const Product = require('./dao/models/products');
const Message = require('./dao/models/messages')
const Cart = require('./dao/models/cart')

//Import transformDataProducts
const { transformDataProducts, transformDataChat } = require('./utils/transformdata')


//Socket Import
const { Server } = require('socket.io')
const io = new Server(server)

//Public
app.use(express.static("public"))

//View Dependencies
const handlebars = require('express-handlebars')
const ProductManager = require('./dao/fs/ProductManager')
const controllerProduct = new ProductManager();

//Import db
const MongoManager = require('./dao/mongodb/db.js')
const classMongoDb = new MongoManager(process.env.URL_MONGO);

//Views
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views')

//Connection
io.on('connection', (socket) => {
    console.log('New user connected in App')
    socket.emit('Welcome', 'Hello, welcome new user')
    socket.on('SendMessage', async (data) => {
        try {
            const prueba = await Message.create(data)
            let messages = await Message.find()
            const dataMessages = transformDataChat(messages)
            socket.emit('refreshmessages', dataMessages)
        } catch (err) {
            console.log(err)
        }
    })
    socket.on('productDeleted', async (data) => {
        try {
            await Product.findByIdAndDelete(data.id)
            const products = await Product.find()
            const dataProducts = transformDataProducts(products)
            socket.emit('refreshproducts', dataProducts)
        } catch (err) {
            console.log(err)
        }
    })
    socket.on('productAdd', async (data) => {
        try {
            const respuesta = await Product.create(data)
            socket.emit('answer', respuesta)
            const products = await Product.find()
            const dataProducts = transformDataProducts(products)
            socket.emit('refreshproducts', dataProducts)
        } catch (err) {
            console.log(err)
        }

    })
    socket.on('requestnewcart', async (data) => {
        try {
            res = await Cart.create({})
            socket.emit('requestcartok', res)
        } catch {
            console.log(err)
        }
    })
    socket.on('requestproduct', async (data) => {
        try {
            const product = await Product.findById(data.pid);
            const cart = await Cart.findById(data.cid);
            const quantity = 1
            const stock = product.stock;
            const existingQuantity = cart.products.find(entry => entry.product.toString() === data.pid)?.quantity || 0;
            const totalQuantity = existingQuantity + quantity;
            if (cart.products.some(entry => entry.product.toString() === data.pid)) {
                if (product && cart) {
                    if (totalQuantity < stock) {
                        const productInCartIndex = cart.products.findIndex(entry => entry.product.toString() === data.pid);
                        cart.products[productInCartIndex].quantity = totalQuantity;
                        product.stock -= quantity;
                        await product.save();
                        await cart.save();
                    } else {
                        console.log('Quantity exceeds available');
                    }
                } else {
                    console.log('Error try found cart or product');
                }
            } else {
                if (product && cart) {
                    if (quantity <= stock) {
                        cart.products.push({ product: product._id, quantity: 1 });
                        product.stock -= quantity;
                        await product.save();
                        await cart.save();
                    } else {
                        console.log('Quantity exceeds available')
                    }
                } else {
                    console.log('Error try found cart or product');
                }
            }
            const cartUpdated = await Cart.findById(data.cid).populate('products.product');
            socket.emit('cartupdated', cartUpdated)
        } catch {
            console.log('error')
        }
    })
    socket.on('requestloadcart', async (data) => {
        try {
            res = await Cart.findById(data)
            console.log(`my id ${res}`)
            socket.emit('requestcartok', res)
        } catch {
            console.log('error')
        }
    })
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log(`Server run on port http://localhost:${PORT}`)
    classMongoDb.connectionMongoDb()
})