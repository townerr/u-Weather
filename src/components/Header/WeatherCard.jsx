import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

const WeatherCard = (props) => {
	const [weatherData, setWeatherData] = React.useState();
	const [hasLoaded, setHasLoaded] = React.useState();
	const dateOptions = {month: 'short', day: '2-digit'};
	let forecastData = {};

  	//Get data from api and load into weatherData
  	React.useEffect(() => {
		const url = 'http://api.weatherapi.com/v1/forecast.json?key=' + process.env.REACT_APP_API_KEY + '&q='+ props.zip +'&days=7&aqi=no&alerts=no';
		axios.get(url).then((res) => {
			setWeatherData(res.data);
			setHasLoaded(true);
		}).catch((err) => {
			alert("Invaid Zip Code");
		});
  	}, [props.zip]);

	if(hasLoaded) {
		//Load forecast data in an object
		forecastData = {
			key: props.keys,
			icon: weatherData.forecast.forecastday[props.keys].day.condition.icon,
			date: new Date(weatherData.forecast.forecastday[props.keys].date.replace(/-/g, '/').replace(/T.+/, '').split(' ')[0]).toLocaleDateString('en-US', dateOptions),
			location: weatherData.location.name,
			conditions: weatherData.forecast.forecastday[props.keys].day.condition.text,
			rainBool: weatherData.forecast.forecastday[props.keys].day.daily_will_it_rain,
			rainChance: weatherData.forecast.forecastday[props.keys].day.daily_chance_of_rain,
			snowBool: weatherData.forecast.forecastday[props.keys].day.daily_will_it_snow,
			snowChance: weatherData.forecast.forecastday[props.keys].day.daily_chance_of_snow,
			high: Math.round(weatherData.forecast.forecastday[props.keys].day.maxtemp_f),
			low: Math.round(weatherData.forecast.forecastday[props.keys].day.mintemp_f),
			wind: Math.round(weatherData.forecast.forecastday[props.keys].day.maxwind_mph),
			humidity: Math.round(weatherData.forecast.forecastday[props.keys].day.avghumidity)
		}
	}

    // Render daily card after data has been loaded from api
	if(props.keys === 0) {
		return hasLoaded ? (
			<Card style={{ width: '15rem', margin: '1em' }} className="card">
				<Card.Header>
					<img className='card-image' src={weatherData.current.condition.icon} alt='weather condition icon'></img>
					<div className='card-temp'>{Math.round(weatherData.current.temp_f)}°F</div>
				</Card.Header>
				<Card.Body>
					<Card.Title className="card-title">{weatherData.location.name}<br />Current</Card.Title>
					<Card.Text className="card-text">
						<span>Conditions: {weatherData.current.condition.text}</span><br />
						<span>Feels Like: {Math.round(weatherData.current.feelslike_f)}°F</span><br />
						<span>High: {Math.round(weatherData.forecast.forecastday[0].day.maxtemp_f)}°F / Low: {Math.round(weatherData.forecast.forecastday[0].day.mintemp_f)}°F</span><br />
						<span>Wind: {weatherData.current.wind_dir} {Math.round(weatherData.current.wind_mph)} mph</span><br />
						<span>Humidity: {weatherData.current.humidity}%</span>
					</Card.Text>
				</Card.Body>
			</Card>
		) : ""
	} else {
		// Render future forecast cards after data has been loaded from api
		return forecastData != null ? (
			<Card style={{ width: '15rem', margin: '1em' }} className="card">
				<Card.Header>
					<img className='card-image' src={forecastData.icon} alt='weather condition icon'></img>
					<div className='card-forecast-temps'>High: {forecastData.high}°F</div>
					<div className='card-forecast-temps'>Low: {forecastData.low}°F</div>
				</Card.Header>
				<Card.Body>
					<Card.Title className="card-title">{forecastData.location}<br />{forecastData.date}</Card.Title>
					<Card.Text className="card-text">
						<span>Conditions: {forecastData.conditions}</span><br />
						<span>Wind: {forecastData.wind} mph</span><br />
						<span>Humidity: {forecastData.humidity}%</span><br />
						{forecastData.snowBool === 1 ? (
							<span>Chance of Snow: {forecastData.snowChance}%</span>
						) : (
							<span>Chance of Rain: {forecastData.rainChance}%</span>
						)}
					</Card.Text>
				</Card.Body>
			</Card>
		) : ""
	}
}

export default WeatherCard;
