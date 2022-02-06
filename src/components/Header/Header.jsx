import React from 'react';
import './Header.css';
import Search from './Search';
import WeatherCard from './WeatherCard';
import { FaCloud } from 'react-icons/fa';

const Header = ({data, setData}) => {
    return (
        <div className="header">
            <div className="container">
                <div className='title-container'>
                    <div className="title"><FaCloud /> u-WEATHER <FaCloud /></div>
                    <div className="title-under">A Simple Weather App</div>
                    <Search data={data} setData={setData}/>
                </div>
                <div className="header-container">
                    <div className="header-card"><WeatherCard  zip="10001" keys={0} /></div>
                    <div className="header-card"><WeatherCard className="header-card" zip="60601" keys={0}/></div>
                    <div className="header-card"><WeatherCard className="header-card" zip="90001" keys={0}/></div>
                </div> 
            </div>
        </div>
    )
}

export default Header;
