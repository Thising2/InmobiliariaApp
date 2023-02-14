import express from "express";

const router = express.Router()

// Routing
router.get('/', (req, res) =>{
    res.send('Hola Mundo en Express!')
});

router.get('/nosotros', (req, res) =>{
    res.send('Info de Nosotros')
});


export default router;