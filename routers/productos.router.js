import express from 'express'
const routerProductos = express.Router()
import controller from '../controllers/productos.controller.js'
import validator from '../validators/productos.validator.js'


/* ------------------------------------------ */
/* CRUD -> CREATE | READ | UPDATE | DELETE */
/* ------------------------------------------ */

// ! GET ALL / ONE (READ) - Request de todos los productos
// http://Localhost:8888/api/productos/

routerProductos.get('/:id?', validator.productoReadOneValidator, controller.obtenerProductos)


// ! POST  (CREATE) - Request para crear un producto
// http://Localhost:8888/api/productos/

routerProductos.post('/', validator.productoCreateValidator, controller.guardarProducto)


// ! PUT  (UPLOAD) - Request actualizar un producto 
// http://Localhost:8888/api/productos/id

routerProductos.put('/:id', validator.productoUpdateValidator, controller.actualizarProducto)



// ! DELETE (DELETE) - Request para eliminar un producto 
// http://Localhost:8888/api/productos/id

routerProductos.delete('/:id', validator.productoDeleteValidator, controller.eliminarProducto)




export default routerProductos


    