import mongoose from 'mongoose'

// CREAMOS EL ESQUEMA

const productosSchema = mongoose.Schema ({
    nombre: String,
    precio: Number,
    stock: Number,
    marca: String,
    categoria: String,
    detalles: String, 
    foto: String,
    envio: Boolean
})

// CREAMOS MODELO 

const productosModel = mongoose.model('productos', productosSchema)

/* --------------------------------------------------------- */
/* METODOS QUE SIRVEN DE INTERFAZ PARA INTERACTUAR CON LA DB */
/* --------------------------------------------------------- */


// ---------------------------- Va a obtener un producto basado en el id 
const leerProducto = async (id) => {
  try {
    const producto = await productosModel.findById(id)
    return producto
  } catch (error) {
    console.log ('[leerProducto]: No se pudo leer el producto con el id', error)
  }
}


// ---------------------------- Va a obtener los productos 
const leerProductos = async () => {
    try {
        const productos = await productosModel.find({})
        return productos
    } catch (error) {
        console.log('[leerProductos]: Algo salió mal', error)
    }
}


// ---------------------------- Va a almacenar el producto basado en el id 
const guardarProducto = async (productoNuevo) => {
    try {
        const productoAlmacenado = new productosModel(productoNuevo)
        await productoAlmacenado.save()
        return productoAlmacenado

    } catch (error) {
        console.log('Error (Guardar productos), no se puede guardar en la DB', error)
    }

}

// ---------------------------- Va a actualizar el producto basado en el id 
const modificarProducto = async (id, productoAEditar) => {

    try {
        const productoModificado = await productosModel.findByIdAndUpdate(id, productoAEditar)
        return productoModificado

    } catch (error) {
        console.log('ERROR[modificarProducto]: No se pudo actualizar el producto')
    }


}


// ---------------------------- Va a eliminar el producto basado en el id 
const borrarProducto = async (id) => {

    try {
        const productoBorrado = await productosModel.findByIdAndDelete(id)
        return productoBorrado
    } catch (error) {
        console.log ('Error al eliminar producto en la DB', error)
    }
}

export default {
    leerProducto,
    leerProductos,
    guardarProducto,
    modificarProducto,
    borrarProducto
}