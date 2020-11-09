import axios from "axios";
import { Clima } from '../models/clima';
export const getClima =async (lat:number,lng:number) => {
    const resp = await    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=94179784a4757a8db970f156bf9038cd&units=metric`);
    let clima:Clima = resp.data;
    let temperatura = clima.main.temp;
    return {
        temperatura
    }
}