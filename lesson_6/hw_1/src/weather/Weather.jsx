import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as WeatherActions from './weather.actions'
const Weather = (props) => {

    useEffect(() => {
        props.getWeatherData();
      }, []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
          {props.weatherData && props.weatherData.map(data=>{
              return(
                <li className="city" key={data.id}>
                <span className="city__name">{data.name}</span>
                <span className="city__temperature">{`${data.temperature} F`}</span>
              </li>
              )
          })}
       
      </ul>
    </main>
  );
};

const mapState =(state)=>{
    return{
        weatherData: state.weather.weatherData
    }
}

const mapDispatch ={
    getWeatherData: WeatherActions.getWeatherData
}

export default connect(mapState, mapDispatch)(Weather);
