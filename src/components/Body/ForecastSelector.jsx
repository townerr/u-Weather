import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

const ForecastSelector = ({ radioValue, setRadioValue }) => {
    const radios = [
        { name: 'Daily', value: '1' },
        { name: '3 Days', value: '3' },
        { name: '7 Days', value: '7' },
    ];

  return (
    <div className='selector'>
        <div>
            <div className='selector-text'>Forecast:</div>
            <div className='selector-warning'>*Due to limitations with the WeatherApi's free plan only daily and 3 day forecasts are available.</div>
        </div>
        <ButtonGroup>
            {radios.map((radio, idx) => (
                radio.value === '7' ? (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={'outline-secondary'}
                        name="radio"
                        size="lg"
                        value={radio.value}
                        disabled
                    >
                        {radio.name}
                    </ToggleButton>
                ) : (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={'outline-secondary'}
                        name="radio"
                        size="lg"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                )
            ))}
      </ButtonGroup>
    </div>
  )
};

export default ForecastSelector;
