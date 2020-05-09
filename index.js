//Importamos cors anywhere
const cors_proxy = require('cors-anywhere');
//Importamos las variables de entorno
require('dotenv').config({path: 'variables.env'});

//Creamos el servidor cors
const app = cors_proxy.createServer({
    originWhitelist: [],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
});

//Asignamos el host
const host = process.env.HOST || '0.0.0.0';
//Asignamos puerto
const port = process.env.PORT || 8080;


//Asignamos puerto, host y arrancamos el servidor cors
app.listen(port, host, () => {
    console.log(`Servidor cors-anywhere iniciado en ${host} : ${port}`);
});
