import { check } from "express-validator";
import productosMiddleware from "../middlewares/productos.middleware.js";


const productoDeleteValidator = [
    check('id')
        .isMongoId()
        .withMessage('Envío información incorrecta para eliminar el producto'),
    productosMiddleware
]

const productoCreateValidator = [
    check('nombre')
        .notEmpty()
        .withMessage('Se requiere colocar un nombre al producto')
        .trim(),
    productosMiddleware
]

// productoUpdateValidator
const productoUpdateValidator = [
    check('id')
        .isMongoId()
        .withMessage('Envío información incorrecta para actualizar el producto')
        .trim(),
    productosMiddleware
]

//productoReadOneValidator
const productoReadOneValidator = [
    check('id')
        .isMongoId()
        .withMessage('Envío información incorrecta para leer el producto')
        .trim(),
    productosMiddleware
]

export default {
    productoCreateValidator,
    productoDeleteValidator,
    productoUpdateValidator,
    productoReadOneValidator
} 