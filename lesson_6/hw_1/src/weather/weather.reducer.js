import {WEATHER_DATA_RECIVED} from './weather.actions'

const initialState = {
    weatherData:null
}


const weatherReducer = (state=initialState, actions)=>{

    switch(actions.type){
        case WEATHER_DATA_RECIVED:{
            return{
                ...state,
                weatherData: actions.payload.weatherData
            }
        }
        default:{
            return state
        }
    }

}

export default weatherReducer