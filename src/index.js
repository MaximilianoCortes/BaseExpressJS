import express from "express";
import enviroment from "./configs/enviroment.js"
import baseRouter from "./routes/baseRouter.js"

const {PORT} = enviroment; //traemos variable entorno con mismo nombre
const {OLA} = enviroment;
console.log(OLA)

const app = express(); //iniciamos la app con express

app.use(express.json()); //pa que lea json

app.use("/",baseRouter) //traemos las rutas del router base (podemos crear varios, pero hay que importarlos)

async function startServer(){

    app.listen(PORT,()=>{
        console.log('Server started on port '+PORT)
    })
}

startServer();

