import express from 'express';

import usuarioRoutes from './usuario.routes.js';

// Crear la app
const app = express();


const port = 3000;

app.listen(port, (res, req) => {
console.log(`Running server in port ${port}`)
})

app.use('/', usuarioRoutes)