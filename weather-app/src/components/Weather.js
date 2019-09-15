import React from "react";

const Weather = props => (
    <div className="weather__info">
        {props.state.country && props.state.city && (
            <p className="weather__key">
                Location:
                <span className="weather__value">
                    {props.state.city}, {props.state.country}
                </span>
            </p>
        )}
        {props.state.temperature && (
            <p className="weather__key">
                Temperature:
                <span className="weather__value">
                    {props.state.temperature}
                </span>
            </p>
        )}
        {props.state.humidity && (
            <p className="weather__key">
                Humidity:
                <span className="weather__value">{props.state.humidity}</span>
            </p>
        )}
        {props.state.description && (
            <p className="weather__key">
                Conditions:
                <span className="weather__value">
                    {props.state.description}
                </span>
            </p>
        )}
        {props.state.error && (
            <p className="weather__key">{props.state.error}</p>
        )}
    </div>
);

export default Weather;
