import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const dbURI = process.env.MONGODB_URI
        if (!dbURI) {
            throw new Error("La variable de entorno MONGODB_URI no está definida en el .env")
        }
        await mongoose.connect(dbURI)
        console.log("MongoDB conectado correctamente")
    } catch (error) {
        console.log("Error al conectar con MongoDB", error.message)
        process.exit(1)
    }
}