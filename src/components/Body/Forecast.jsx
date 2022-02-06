import React from 'react';
import WeatherCard from '../Header/WeatherCard';

const Forecast = ({data, selection}) => {
    const forecastList = [];
    const forecastRef = React.useRef(null);

    //Scroll to forecast once loaded
    const scrollToForecast = () => {
        forecastRef.current.scrollIntoView({ behavior: "smooth" });
    }

    React.useEffect(() => {
        scrollToForecast();
      }, [])
    
    //Create list of cards
    for (var i = 0; i < selection; i++) {
        forecastList.push(<WeatherCard zip={data} keys={i} />)
    }

    return (
        <div className='weather-container'>
            {forecastList.map(card =>
                <div className='weather-item' ref={forecastRef} key={card.key}>{card}</div>
            )}
        </div>
    )
};

export default Forecast;
