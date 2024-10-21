
//iniciamos el modulo express
const express = require('express');
const dbconnect = require('./config');
const Modelusu = require('./modelo/Post');
const app = express();

//configuracion del router para entrada y salida de la base de datos.
const router = express.Router();
// metodo Post, Agregando
router.post("/", async(req, res) => {
    const body = req.body;
    const responder = await Modelusu.create(body);
    res.send(responder);
})
//Metodo get buscando.
router.get("/", async(req, res) => {
    const responder = await Modelusu.find({})
    res.send(responder);
})
//Metodo get buscando primero el Id.
router.get("/:id", async(req, res) => {
    const id = req.params.id;
    const responder = await Modelusu.findById(id)
    res.send(responder);
})
//Metodo put 
router.put("/:id", async(req, res) => {
    const body = req.body;
    const id = req.params.id;
    const responder = await Modelusu.findOneAndUpdate({_id:id}, body)
    res.send(responder);
})
//Metodo Delete
router.delete("/:id", async(req, res) => {
    const body = req.body;
    const id = req.params.id;
    const responder = await Modelusu.deleteOne({_id:id}, body)
    res.send(responder);
})



//Las App para las rutas.
app.use(express.json());
app.use(router);
app.listen(10000);

dbconnect();