import * as yargs from "yargs";
import { getClima } from './clima/clima';
import { getLugarLatLog } from './lugar/lugar';
const lugar = require('./lugar/lugar');
import colors, { bgBlack, bgRed } from "colors";




// const axios = require('axios');
yargs.options({
  direccion: {
    alias: "d",
    desc: "Prueba",
    demand: true,
  },
});

let argv = yargs.argv;
getLugarLatLog(`${argv.direccion}`)
.then(coordenadas => {
    getClima(coordenadas.latitud,coordenadas.longitud).then(temperatura => {
        console.log("#############################".bgGreen.green ,colors.blue("TEMPERATURA") ,"##########################".bgGreen.green);

    console.log(`El clima de ${argv.direccion} es : ${temperatura.temperatura} °C`);

    console.log("#################################################################".bgGreen.green);
    }).catch(console.log);

}).catch(err=>{
    console.log("#############################".bgRed.red ,colors.red("ERROR") ,"##########################".bgRed.red);

    console.log("Lo sentimos no hay resultados para : ".bgBlue,argv.direccion," :( ");

    console.log("#################################################################".bgRed.red);
});




