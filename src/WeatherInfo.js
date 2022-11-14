import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
<div className="box">
<div className="cc">
       <div class="city">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="cel">{props.data.description}</li>
      </ul>
      <div className="cels">
            <div className="tt">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
            </div>
            </div>
            <div className="emo">
              <div className="cels">
              <WeatherIcon code={props.data.icon} size={140} />
            </div>
        <div className="wii">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
          </div>
        </div>
         </div>
         </div>
         </div>
  );
}