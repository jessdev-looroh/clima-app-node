import axios from "axios";
import { Geoapi } from '../models/geoapi';
const API_KEY = "AIzaSyAPot74vu7OLrnH7ufFUy5Wdw0tYMnjRIA";

export const getLugarLatLog =async (direccion:string)=>{
    const encodeUrl = encodeURI(`${direccion}`);
    
    var instance = axios.create({
      baseURL: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeUrl}&inputtype=textquery&fields=formatted_address,name,geometry&key=${API_KEY}`,
    });
    
    const resp = await instance.get('');
    
    const geoResp : Geoapi = resp.data;

    if(geoResp.status==="ZERO_RESULTS"){
        throw new Error(`No hay resultados para ${direccion}`);        
    }

    const address =geoResp.candidates[0].formatted_address; 
    const latitud = geoResp.candidates[0].geometry.location.lat;
    const longitud = geoResp.candidates[0].geometry.location.lng;   

    return{
        address,
        latitud,
        longitud        
    }
}


module.exports = {
    getLugarLatLog
}