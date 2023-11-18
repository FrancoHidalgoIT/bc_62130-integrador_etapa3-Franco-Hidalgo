import mongoose from 'mongoose'

const handleConnections =  async (uri) => {
    try {
        await mongoose.connect(uri)
        console.log('Conexión a mongodb realizada con éxito')
        } 

    catch (error) {
        console.log('Error a conectar a mongoDB')
    }
}

export default handleConnections