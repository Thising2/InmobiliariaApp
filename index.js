import express from 'express';

import usuarioRoutes from './routes/usuario.routes.js';

// Crear la app
const app = express();
const port = 3000;

// Habilito PUG
app.set('view engine', 'pug');
app.set('views', './views');

app.listen(port, (res, req) => {
console.log(`Running server in port ${port}`)
})

// Carpeta publica con archivos estáticos
app.use( express.static('public') );

app.use('/', usuarioRoutes)