import React from 'react';
import './Header.css';
import Search from './Search';
import WeatherCard from './WeatherCard';
import { Col, Row } from 'react-bootstrap';
import { FaCloud } from 'react-icons/fa';

const Header = ({data, setData}) => {
    return (
        <div className="header">
            <div className="container">
                <div className="title"><FaCloud /> u-WEATHER <FaCloud /></div>
                <div className="title-under">A Simple Weather App</div>
                <Search data={data} setData={setData}/>
                <div className="header-cards">
                    <Row>
                        <Col>
                            <WeatherCard zip="10001" keys={0} />
                        </Col>
                        <Col>
                            <WeatherCard zip="60601" keys={0}/>
                        </Col>
                        <Col>
                            <WeatherCard zip="90001" keys={0}/>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Header;
