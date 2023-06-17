//aqui va la logica que mandas a las rutas

function decirHola(req, res){ //esta funcion hace las cositas, cosas recibidas en request y enviadas en response
    return res.send("Hola")
}

export {decirHola, } //agregas aqui las funciones que exportas