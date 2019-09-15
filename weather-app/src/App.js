import React from "react";
import Form from "./components/Form";
import Titles from "./components/Titles";
import Weather from "./components/Weather";

const API_KEY = "f2d1228cce3a932993c1003c1e72c33c";

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    };
    getWeather = async e => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
        );
        const data = await api_call.json();
        if (city && country) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter the value."
            });
        }
    };
    render() {
        return (
            <div className="container main">
                <div className="row">
                    <div className="col-5 title-container">
                        <Titles />
                    </div>
                    <div className="col-7 form-container">
                        <Form getWeather={this.getWeather} />
                        <Weather state={this.state} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
