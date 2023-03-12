const formularioLogin = (req, res) => {
    res.render('auth/login', {
        pagina: 'Inicia Sesión',
        autenticado: false 
    });
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        pagina: 'Crear tu Cuenta'
    });
}











export {
    formularioLogin,
    formularioRegistro,
}