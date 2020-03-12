export const WEATHER_DATA_RECIVED= "WEATHER_DATA_RECIVED"
import {getCities} from "./weather.geteway"

export const weatherDataRecived =(weatherData)=>{
    return {
        type:WEATHER_DATA_RECIVED,
        payload:{
            weatherData
        }
    }
}


export const  getWeatherData = ()=>{
    return function (dispatch){
        getCities().then((data)=> dispatch(weatherDataRecived(data)))
    }
}

