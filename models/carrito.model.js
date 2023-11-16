import mongoose from "mongoose"

// ! Creamos el esquema 

const carritoSchema = mongoose.Schema({
    carrito: Array
})

// ! Creamos el modelo 
const CarritoModel =  mongoose.model('carritos', carritoSchema)

const crearCarrito = async (carrito) => {

    try {
        const carritoCreado = new CarritoModel({carrito})
        const carritoGuardado = carritoCreado.save()

        return carritoGuardado

    } catch (error) {
        console.log('ERROR [crearCarrito]: Problemas al crear el carrito', error)
    }
}

export default {
    crearCarrito
}