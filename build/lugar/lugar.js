"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLugarLatLog = void 0;
const axios_1 = __importDefault(require("axios"));
const API_KEY = "AIzaSyAPot74vu7OLrnH7ufFUy5Wdw0tYMnjRIA";
exports.getLugarLatLog = (direccion) => __awaiter(void 0, void 0, void 0, function* () {
    const encodeUrl = encodeURI(`${direccion}`);
    var instance = axios_1.default.create({
        baseURL: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeUrl}&inputtype=textquery&fields=formatted_address,name,geometry&key=${API_KEY}`,
    });
    const resp = yield instance.get('');
    const geoResp = resp.data;
    if (geoResp.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para ${direccion}`);
    }
    const address = geoResp.candidates[0].formatted_address;
    const latitud = geoResp.candidates[0].geometry.location.lat;
    const longitud = geoResp.candidates[0].geometry.location.lng;
    return {
        address,
        latitud,
        longitud
    };
});
module.exports = {
    getLugarLatLog: exports.getLugarLatLog
};
