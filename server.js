import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import path from 'node:path'

import routerProductos from './routers/productos.router.js'
import routerUpload from './routers/upload.router.js'
import routerCarrito from './routers/carrito.router.js'

// ! Configuraciones 

const app = express()
const PORT = process.env.PORT || 3000
const corsConfig = {
    origin: 'http://localhost:5173'
}

// ! 1. CONEXIÓN MONGODB

const conectarDB =  async () => {
    try {
        await mongoose.connect(process.env.URI_MLOCAL)
        console.log('Conexión a mongodb realizada con éxito')
        } 

    catch (error) {
        console.log('Error a conectar a mongoDB')
    }
}
conectarDB()


// ! Middlewares
app.use(express.urlencoded({extended: true})) // Decodificación del body 
app.use(express.json()) 
app.use(cors(corsConfig))
app.use(express.static(path.join('public')))

// ! Rutas
app.use('/api/productos', routerProductos)
app.use('/api/upload', routerUpload)
app.use('/api/carrito', routerCarrito)


app.get('/', (req, res) => {
res.send('Hello World')
})

app.all('*', (req, res) => {
    res.status(404).send(`Ruta ${req.url} utilizando el ${req.method} no está disponible`)
})

app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

