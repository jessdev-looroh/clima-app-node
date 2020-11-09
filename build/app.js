"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = __importStar(require("yargs"));
const clima_1 = require("./clima/clima");
const lugar_1 = require("./lugar/lugar");
const lugar = require('./lugar/lugar');
const colors_1 = __importDefault(require("colors"));
// const axios = require('axios');
yargs.options({
    direccion: {
        alias: "d",
        desc: "Prueba",
        demand: true,
    },
});
let argv = yargs.argv;
lugar_1.getLugarLatLog(`${argv.direccion}`)
    .then(coordenadas => {
    clima_1.getClima(coordenadas.latitud, coordenadas.longitud).then(temperatura => {
        console.log("#############################".bgGreen.green, colors_1.default.blue("TEMPERATURA"), "##########################".bgGreen.green);
        console.log(`El clima de ${argv.direccion} es : ${temperatura.temperatura} °C`);
        console.log("#################################################################".bgGreen.green);
    }).catch(console.log);
}).catch(err => {
    console.log("#############################".bgRed.red, colors_1.default.red("ERROR"), "##########################".bgRed.red);
    console.log("Lo sentimos no hay resultados para : ".bgBlue, argv.direccion, " :( ");
    console.log("#################################################################".bgRed.red);
});
