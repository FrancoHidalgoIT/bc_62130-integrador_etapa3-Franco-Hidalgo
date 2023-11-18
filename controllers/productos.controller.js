import models from '../models/productos.model.js'
import handleError from '../utils/handleError.js'


const obtenerProductos = async (req, res) => {
    let id = req.params.id
   
    try {
        if (id) {
            const producto = await models.leerProducto(id)
            return res.status(200).json(producto)

        } else {
            const productos = await models.leerProductos()
            return res.status(200).json(productos)
        }

    } catch (error) {
        console.log('No se pudo acceder a los productos', error)
        handleError(res, `[obtenerProductos] ${error.message} - No se pudo acceder a los productos`)
    }
   
}


const guardarProducto = async (req, res) => {
    
    try {
        const producto = req.body 
        console.log(producto)
        const productoGuardado = await models.guardarProducto(producto)
        res.status(201).json(productoGuardado)

    } catch (error) {
        console.log('Error al guardar un producto', error)
        handleError(res, `[guardarProducto] ${error.message} - Error al guardar un producto` )
       
    }
    
    
}


const actualizarProducto = async (req, res) => {
   const { id } = req.params
   const producto = req.body

   try {
    const productoActualizado = await models.modificarProducto(id, producto)
    res.status(200).json(productoActualizado)

   } catch (error) {
    console.log('No se pudo actualizar el producto', error)
    handleError(res, `[actualizarProducto] ${error.message} - No se pudo actualizar el producto`)
       
   }
}


const eliminarProducto = async (req, res) => {

    const id = req.params.id //ObjetID
    console.log(id)

    try {
        const productoBorrado = await models.borrarProducto(id)
        res.status(200).json(productoBorrado)

    } catch (error) {
        console.log('No se pudo eliminar el producto', error)
        handleError(res, `[eliminarProducto] ${error.message} - No se pudo eliminar el producto`)
    }
}



export default {
    obtenerProductos,
    guardarProducto,
    actualizarProducto,
    eliminarProducto
}

