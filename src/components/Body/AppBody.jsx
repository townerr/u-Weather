import React from 'react';
import axios from 'axios';
import ForecastSelector from './ForecastSelector';
import Forecast from './Forecast';
import Radar from './Radar';
import './AppBody.css';

const AppBody = ({data, setData}) => {
  const [radioValue, setRadioValue] = React.useState('1');
  const [latValue, setLatValue] = React.useState('45');
  const [longValue, setLongValue] = React.useState('-89');
  const [hasLoaded, setHasLoaded] = React.useState();

  //Get lat and long from data
  React.useEffect(() => {
    if(data != null) {
      const url = 'https://api.weatherapi.com/v1/forecast.json?key=' + process.env.REACT_APP_API_KEY + '&q='+ data +'&days=7&aqi=no&alerts=no';
      axios.get(url).then((res) => {
        setLatValue(res.data.location.lat);
        setLongValue(res.data.location.lon);
        setHasLoaded(true);
      }).catch((err) => {
        alert("Invaid US Zip Code. Please enter a valid US zip code.");
      });
    }
  }, [data]);

  // Render once api has loaded lat and long for radar
  return hasLoaded ? (
      <div>
          <ForecastSelector radioValue={radioValue} setRadioValue={setRadioValue}/>
          <Forecast selection={radioValue} data={data}/>
          <Radar lat={latValue} long={longValue} />
      </div>
  ) : " "
};

export default AppBody;
